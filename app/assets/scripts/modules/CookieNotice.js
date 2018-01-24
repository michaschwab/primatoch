class CookieNotice {
  constructor() {
    if (!document.cookie.includes('accepted-cookie')) {
      this.cookieNotice = document.getElementById('js-cookie-notice');
      this.acceptBtn = document.getElementById('js-accept-cookies');
      this.showCookieNotice();
    }
  }

  showCookieNotice() {
    this.cookieNotice.style.display = 'block';
    this.hideCookieNotice();
  }

  hideCookieNotice() {
    this.acceptBtn.addEventListener('click', () => {
      this.cookieNotice.style.display = 'none';
      document.cookie = 'accepted-cookie=true; expires=Wed, 31 Dec 2042 12:00:00 UTC; path=/';
    });
  }
}

export default CookieNotice;
