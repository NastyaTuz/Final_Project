import SimpleButton from '../../UI/SimpleButton/SimpleButton'
import s from './Banner.module.css'
import banner from './banner.png'



export default function Banner({ scrollToProducts }) {

    const background = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover'
    }

  return (
    <div style={background} className={s.banner}>
        <div className='wrapper'>
        <h1>Amazing Discounts on Garden Products!</h1>
        <div className={s.banner_button}>
          <SimpleButton text={'Check out'} onClick = {scrollToProducts}/>
        </div>
        </div>
  
    </div>
  )
}
