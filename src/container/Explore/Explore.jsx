import React from 'react'
import { motion } from 'framer-motion'
import { MotionWrap, AppWrap } from '../../wrapper'
import MediaControlCard from './AudioCard'
import { images } from '../../constants'

const Explore = () => {
  return (
    <>
      <h2 className='head-text'>Rhythms of the World</h2>
      <p className='p-text1'> Across every continent and culture, music plays a vital role in shaping identity and fostering connections between individuals and communities, from traditional folk songs to modern pop hits.</p>


      <div className='app__profiles'>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
        >
          <MediaControlCard image_='https://enjoyshanghai.com/wp-content/uploads/2020/10/5c6637ddca3b5.image-1.jpg' title='China' audioPath={images.China} />
          <h2 className='bold-text' style={{ marginTop: 15}}> "Jasmine Flower" </h2>
          <p className='p-text' style={{ marginTop: 10 }}>
            "Jasmine Flower" is a popular Chinese folk song known as "Mò Li Huā" in Mandarin. The lyrics of the song describe the beauty and fragrance of the jasmine flower, which is often associated with purity and elegance in Chinese culture.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
        >
          <MediaControlCard image_='https://www.visitargentina.net/wp-content/uploads/2014/12/Music-in-Argentina.jpg' title='Argentina' audioPath={images.Argentina} />
          <h2 className='bold-text' style={{ marginTop: 15 }}>"Gracias a la vida"</h2>
          <p className='p-text' style={{ marginTop: 10 }}>Argentina has a rich tradition of folk music known as "folklore argentino." This genre encompasses various musical styles and rhythms that reflect the country's diverse cultural heritage. These songs often depict themes of rural life, nature, love, and social issues.</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
        >
          <MediaControlCard image_='https://image.slidesharecdn.com/cksc-sakuragrade8-161016183720/85/sakura-sakura-cherry-blossoms-japanese-folk-song-for-grade-8-mapeh-music-class-1-638.jpg?cb=1666148713' title='Japan' audioPath={images.japan} />
          <h2 className='bold-text' style={{ marginTop: 15 }}>"Sakura"</h2>
          <p className='p-text' style={{ marginTop: 10 }}>"Sakura" is a traditional Japanese folk song that is deeply rooted in Japanese culture. It is also known as "Sakura Sakura" or "Cherry Blossoms" in English. The song is associated with the beauty and ephemeral nature of cherry blossoms, which hold great symbolism in Japanese traditions.</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
        >
          <MediaControlCard image_='https://mf.b37mrtl.ru/rbthmedia/images/2020.04/original/5e878b3585600a78055d80e6.jpg' title='Russia' audioPath={images.Russia} />
          <h2 className='bold-text' style={{ marginTop: 15 }}>"Kalinka"</h2>
          <p className='p-text' style={{ marginTop: 10 }}>"Kalinka" is a well-known Russian folk song that has gained international recognition. The song's title, "Kalinka," is derived from the Russian word for the snowball tree (Viburnum opulus), which is commonly found in Russia. The song's lyrics depict a joyful celebration.</p>
        </motion.div>

      </div>
    </>

  )
}

export default AppWrap(
  MotionWrap(Explore, 'app__about'), 'explore', 'app__color3bg');