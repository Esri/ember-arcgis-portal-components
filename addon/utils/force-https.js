/**
 * force (ish) a url to use https.
 * Since we don't actually control the origin servers, these upgraded urls
 * *may* not work. It's the consumer's issue to handle the failure.
 */
export default function forceHttps (url, currentProtocol = 'http') {
  // upgrade to https if the current protocol is https
  if (url && currentProtocol === 'https') {
    return upgradeToHttps(url);
  } else if (/\.arcgis\.com/.test(url)) {
    // always upgrade for arcgis.com urls
    return upgradeToHttps(url);
  } else {
    return url;
  }
}

/**
 * Upgrade a url to use https
 */
function upgradeToHttps (url) {
  return url.replace(/^http:/i, 'https:');
}
