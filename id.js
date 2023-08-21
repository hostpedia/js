function autoRelated(data) {
    var out = data[1];		    

    for (i = 0; i < out.length; i++) {
    	var kw = out[i];
        dom += `<aside><a href="${targetUrl}" target="_blank"><img alt="${kw}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /></a><small>title: <i>${kw}</i></small><h3><a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a></h3><p align="justify"><b>${kw}</b> adalah salah satu hasil terbaik untuk kategori ${postTitle}. Semua yang kami informasikan di situs ini, hanya sebagai referensi saja. Jangan ragu untuk menyimpan dan menandai ${kw} untuk informasi yang mungkin anda perlukan di kemudian hari.</p></aside>`;
    }
}
