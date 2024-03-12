import Replicate from 'replicate'
import dotenv from 'dotenv'
dotenv.config()

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: 'https://www.npmjs.com/package/create-replicate'
})
const model = 'lucataco/faceswap:9a4298548422074c3f57258c5d544497314ae4112df80d116f0d2109e843d20d'
const input = {
  swap_image: 'https://www.daydev.com/api/nida.jpg',
  target_image: 'https://pics.jjgirls.com/pictures/atkexotics/kalina-ryu/top-secret-close-up-avatar/kalina-ryu-4.jpg',
}

console.log({ model, input })
console.log('Running...')
const output = await replicate.run(model, { input })
console.log('Done!', output)
