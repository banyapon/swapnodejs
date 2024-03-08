const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://faceswap-image-transformation-api.p.rapidapi.com/faceswap',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'tNJK4NsKgcmshqNfzHY5BGPqEEaup1wiSQ4jsn8EjVHSVKLh3H',
    'X-RapidAPI-Host': 'faceswap-image-transformation-api.p.rapidapi.com'
  },
  data: {
    TargetImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpUCAM-9HzuorrH6b4z6jonHN_Iuz0EI89Q&usqp=CAU',
    SourceImageUrl: 'https://static.trueplookpanya.com/tppy/member/m_890000_892500/890051/cms/images/%E0%B9%80%E0%B8%9A%E0%B8%A5%E0%B8%A5%E0%B9%88%E0%B8%B2%20%E0%B8%97%E0%B8%A3%E0%B8%B9.jpg'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}