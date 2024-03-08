const http = require('https');

const options = {
	method: 'POST',
	hostname: 'faceswap-image-transformation-api.p.rapidapi.com',
	port: null,
	path: '/faceswap',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'tNJK4NsKgcmshqNfzHY5BGPqEEaup1wiSQ4jsn8EjVHSVKLh3H',
		'X-RapidAPI-Host': 'faceswap-image-transformation-api.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write(JSON.stringify({
  TargetImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpUCAM-9HzuorrH6b4z6jonHN_Iuz0EI89Q&usqp=CAU',
  SourceImageUrl: 'https://static.trueplookpanya.com/tppy/member/m_890000_892500/890051/cms/images/%E0%B9%80%E0%B8%9A%E0%B8%A5%E0%B8%A5%E0%B9%88%E0%B8%B2%20%E0%B8%97%E0%B8%A3%E0%B8%B9.jpg'
}));
req.end();