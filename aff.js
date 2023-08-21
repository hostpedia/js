function autoRelated(data) {
	var out = data[1];

	for (i = 0; i < out.length; i++) {
		var kw = out[i];
		dom += `<aside><a href="${targetUrl}" target="_blank"><img alt="${kw}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /></a><small>title: <i>${kw}</i></small><h3><a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a></h3><p align="justify">Pembeli yang melihat produk ini juga membeli produk ini. Dapatkan produk ini di marketplace favorit anda.<i>Klik Tombol </i><br/><br/><a href="${UrlShopee}" target="_blank"><button>Shopee</button><img alt="${kw}" src="https://kaldualania.com/wp-content/uploads/2019/09/button-shopee-768x166.png" width="auto" height="auto" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /></a> | <a href="${UrlToped}" target="_blank"><button>Tokopedia</button></a> | <a href="${UrlLazada}" target="_blank"><button>Lazada</button></a></p></aside>`;
	}
}
