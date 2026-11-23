var body = $response && $response.body;

if (!body) {
  $done({});
} else {
  try {
    var payload = JSON.parse(body);
    var data = payload && payload.data;

    if (data && data.splash) {
      data.splash.switch = false;
      data.splash.ad_id = "";
    }

    if (data && data.feed && data.feed.discover) {
      data.feed.discover.switch = false;
      data.feed.discover.ad_id = "";
    }

    $done({ body: JSON.stringify(payload) });
  } catch (error) {
    $done({ body: body });
  }
}
