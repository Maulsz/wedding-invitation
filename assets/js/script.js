/**
 * ==============================================================================
 * PREMIUM ISLAMIC DIGITAL WEDDING INVITATION - JAVASCRIPT LOGIC
 * Standalone Vanilla JavaScript implementation
 * ==============================================================================
 */

'use strict';

/**
 * Global Configuration Object
 * Easily customizable settings for the wedding celebration
 */
const WEDDING_CONFIG = {
  // Target Wedding Date (Akad Nikah: 20 December 2026 08:00:00 WIB / UTC+7)
  targetDate: new Date('2026-12-20T08:00:00+07:00').getTime(),

  // Demonstration WhatsApp number (Placeholder)
  // Format: country code without '+' or dashes, e.g. '6281234567890'
  whatsappNumber: '6281234567890',

  // Couple names for automated messages
  groomName: 'Ahmad Fadhil',
  brideName: 'Aisyah Rahma',

  // Calendar Event Information
  calendarEvent: {
    title: "Pernikahan Ahmad Fadhil & Aisyah Rahma",
    details: "Walimatul 'Urs - Akad Nikah & Resepsi Pernikahan Ahmad & Aisyah.",
    location: "Sasana Kencana Grand Ballroom, Jakarta Selatan",
    start: "20261220T010000Z", // UTC format (08:00 WIB)
    end: "20261220T070000Z"    // UTC format (14:00 WIB)
  }
};

/**
 * State Management
 */
const AppState = {
  isAudioPlaying: false,
  isInvitationOpened: false,
  currentGalleryIndex: 0,
  galleryItems: []
};

// ==============================================================================
// 1. DOM Content Loaded - Application Bootstrap
// ==============================================================================
document.addEventListener('DOMContentLoaded', () => {
  parseGuestRecipient();
  initOpeningInteraction();
  initAudioPlayer();
  initCountdownTimer();
  initGalleryLightbox();
  initCopyButtons();
  initScrollReveal();
  initCalendarButton();
});

// ==============================================================================
// 2. Guest Recipient Parser from URL Query Parameters
// ==============================================================================
/**
 * Reads '?to=' parameter from current URL, sanitizes it, and displays it
 * on the cover overlay.
 * Example URL: index.html?to=Bapak+Ahmad+Subarjo
 */
function parseGuestRecipient() {
  const urlParams = new URLSearchParams(window.location.search);
  let guestName = urlParams.get('to');

  const guestNameElement = document.getElementById('guest-recipient-name');

  if (guestName) {
    // Sanitize input to prevent injection
    guestName = guestName.trim().replace(/[<>]/g, '');
    if (guestNameElement) {
      guestNameElement.textContent = guestName;
    }
  } else {
    if (guestNameElement) {
      guestNameElement.textContent = 'Tamu Undangan';
    }
  }
}

// ==============================================================================
// 3. Opening Invitation Interaction
// ==============================================================================
/**
 * Opens the invitation: unlocks scrolling, slides up the cover screen,
 * and starts audio playback upon user interaction.
 */
function initOpeningInteraction() {
  const openBtn = document.getElementById('btn-open-invitation');
  const coverOverlay = document.getElementById('opening-cover');

  if (!openBtn || !coverOverlay) return;

  openBtn.addEventListener('click', () => {
    AppState.isInvitationOpened = true;
    
    // Unlock body scroll
    document.body.classList.remove('invitation-locked');

    // Smoothly slide cover away
    coverOverlay.classList.add('opened');

    // Attempt starting background audio (user gesture requirement satisfied)
    playAudio();

    // Trigger scroll reveal animations
    setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 400);
  });
}

// ==============================================================================
// 4. Background Audio Player & Fallback Synthesizer
// ==============================================================================
/**
 * Controls background audio with play/pause toggles and status indicators.
 * Includes graceful handling for errors or missing audio files.
 */
function initAudioPlayer() {
  const audio = document.getElementById('bg-audio');
  const audioBtn = document.getElementById('audio-controller-btn');

  if (!audio || !audioBtn) return;

  // Set initial volume
  audio.volume = 0.5;

  audioBtn.addEventListener('click', () => {
    if (AppState.isAudioPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  });

  // Track natural audio events
  audio.addEventListener('play', () => {
    AppState.isAudioPlaying = true;
    audioBtn.classList.add('playing');
    audioBtn.setAttribute('aria-label', 'Jeda Musik');
  });

  audio.addEventListener('pause', () => {
    AppState.isAudioPlaying = false;
    audioBtn.classList.remove('playing');
    audioBtn.setAttribute('aria-label', 'Putar Musik');
  });

  audio.addEventListener('ended', () => {
    AppState.isAudioPlaying = false;
    audioBtn.classList.remove('playing');
    audioBtn.setAttribute('aria-label', 'Putar Musik');
  });

  audio.addEventListener('error', () => {
    AppState.isAudioPlaying = false;
    audioBtn.classList.remove('playing');
    audioBtn.setAttribute('aria-label', 'Putar Musik');
    console.warn('Berkas audio nasheed.mp3 belum tersedia atau format tidak didukung.');
  });
}

function playAudio() {
  const audio = document.getElementById('bg-audio');
  const audioBtn = document.getElementById('audio-controller-btn');
  if (audio) {
    audio.play().then(() => {
      AppState.isAudioPlaying = true;
      if (audioBtn) {
        audioBtn.classList.add('playing');
        audioBtn.setAttribute('aria-label', 'Jeda Musik');
      }
    }).catch(err => {
      AppState.isAudioPlaying = false;
      if (audioBtn) {
        audioBtn.classList.remove('playing');
        audioBtn.setAttribute('aria-label', 'Putar Musik');
      }
      console.log('Audio autoplay dicegah peramban atau berkas audio belum tersedia:', err);
    });
  }
}

function pauseAudio() {
  const audio = document.getElementById('bg-audio');
  const audioBtn = document.getElementById('audio-controller-btn');
  if (audio) {
    audio.pause();
    AppState.isAudioPlaying = false;
    if (audioBtn) {
      audioBtn.classList.remove('playing');
      audioBtn.setAttribute('aria-label', 'Putar Musik');
    }
  }
}

// ==============================================================================
// 5. Save The Date Countdown Timer
// ==============================================================================
/**
 * Calculates remaining days, hours, minutes, and seconds until WEDDING_CONFIG.targetDate.
 * Updates the UI every 1000ms.
 */
function initCountdownTimer() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-minutes');
  const secsEl = document.getElementById('cd-seconds');
  const expiredMsgEl = document.getElementById('cd-expired-msg');
  const countdownGrid = document.querySelector('.countdown-grid');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = WEDDING_CONFIG.targetDate - now;

    if (distance <= 0) {
      // Event has occurred
      if (countdownGrid) countdownGrid.style.display = 'none';
      if (expiredMsgEl) {
        expiredMsgEl.style.display = 'block';
        expiredMsgEl.textContent = 'Alhamdulillah, Akad & Resepsi Pernikahan Telah Berlangsung.';
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  // Initial call and recurring interval
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ==============================================================================
// 6. Google Calendar Integration
// ==============================================================================
/**
 * Opens Google Calendar event creation URL with pre-filled details.
 */
function initCalendarButton() {
  const btn = document.getElementById('btn-add-calendar');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const ev = WEDDING_CONFIG.calendarEvent;
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ev.title)}&dates=${ev.start}/${ev.end}&details=${encodeURIComponent(ev.details)}&location=${encodeURIComponent(ev.location)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

// ==============================================================================
// 7. Horizontal Photo Strip & Lightbox Modal
// ==============================================================================
/**
 * Fullscreen Lightbox modal with next/prev navigation, backdrop close, and Escape key handler.
 * Seamlessly integrates with the horizontal scrolling photo strip, indexing only unique photos
 * to prevent duplicate cycle steps.
 */
function initGalleryLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-image');
  const captionEl = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  
  // Select unique items from the first group for the lightbox playlist
  const uniqueItems = document.querySelectorAll('.gallery-strip-group:first-child .gallery-item');
  if (!modal || !imgEl || !uniqueItems.length) return;

  // Build items cache using only the original unique set
  AppState.galleryItems = Array.from(uniqueItems).map(item => {
    const img = item.querySelector('img');
    return {
      src: img.getAttribute('src'),
      alt: img.getAttribute('alt') || 'Foto Dokumentasi Pernikahan'
    };
  });

  function showLightbox(index) {
    if (index < 0 || index >= AppState.galleryItems.length) index = 0;
    AppState.currentGalleryIndex = index;
    const current = AppState.galleryItems[index];
    imgEl.src = current.src;
    imgEl.alt = current.alt;
    if (captionEl) captionEl.textContent = current.alt;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideLightbox() {
    modal.classList.remove('active');
    if (AppState.isInvitationOpened) {
      document.body.style.overflow = '';
    }
  }

  function nextImage() {
    let nextIdx = AppState.currentGalleryIndex + 1;
    if (nextIdx >= AppState.galleryItems.length) nextIdx = 0;
    showLightbox(nextIdx);
  }

  function prevImage() {
    let prevIdx = AppState.currentGalleryIndex - 1;
    if (prevIdx < 0) prevIdx = AppState.galleryItems.length - 1;
    showLightbox(prevIdx);
  }

  // Attach click listener to ALL gallery items (both original group and duplicate group)
  const allItems = document.querySelectorAll('.gallery-item');
  allItems.forEach(item => {
    const handleClick = () => {
      const idxAttr = item.getAttribute('data-gallery-index');
      const idx = idxAttr !== null ? parseInt(idxAttr, 10) : 0;
      showLightbox(idx);
    };

    item.addEventListener('click', handleClick);

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', hideLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);

  // Close when clicking outside image box
  modal.addEventListener('click', (e) => {
    if (e.target === modal) hideLightbox();
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') hideLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  // Touch interaction on the strip: pause scrolling while touching
  initGalleryTouchControls();
}

function initGalleryTouchControls() {
  const wrapper = document.querySelector('.gallery-strip-wrapper');
  if (!wrapper) return;

  let touchTimeout;
  wrapper.addEventListener('touchstart', () => {
    clearTimeout(touchTimeout);
    wrapper.classList.add('is-paused');
  }, { passive: true });

  wrapper.addEventListener('touchend', () => {
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wrapper.classList.remove('is-paused');
    }, 1200);
  }, { passive: true });

  wrapper.addEventListener('touchcancel', () => {
    wrapper.classList.remove('is-paused');
  }, { passive: true });
}

// ==============================================================================
// 8. Copy Account Number Functionality
// ==============================================================================
/**
 * Copies account number or address to system clipboard and provides animated feedback.
 */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetText = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Informasi';

      if (!targetText) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(targetText).then(() => {
          showToast(`${label} berhasil disalin ke clipboard!`);
        }).catch(() => {
          fallbackCopyText(targetText, label);
        });
      } else {
        fallbackCopyText(targetText, label);
      }
    });
  });
}

function fallbackCopyText(text, label) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`${label} berhasil disalin!`);
  } catch (err) {
    showToast('Gagal menyalin otomatis, silakan salin manual.');
  }
  document.body.removeChild(textArea);
}

// ==============================================================================
// 11. Toast Notification Utility
// ==============================================================================
/**
 * Renders an accessible, floating toast notification at top-center.
 */
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  // Force reflow for CSS transition
  void toast.offsetWidth;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 3200);
}

// ==============================================================================
// 12. Intersection Observer for Scroll Reveals
// ==============================================================================
/**
 * Observes elements with class '.reveal-on-scroll' and triggers smooth fade-up.
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (!('IntersectionObserver' in window)) {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

