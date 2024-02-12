import s from './Banner.module.css'
import banner from './banner.jpg'
import Button from '../../UI/Button/Button'



export default function Banner({ scrollToProducts }) {

    const background = {
        backgroundImage: `url(${banner})`
    }

  return (
    <div style={background} className={s.banner}>
        <div className='wrapper'>
        <h1>Amazing Discounts <br/> on Garden Products!</h1>
        <Button 
        onClick={scrollToProducts}
        text = {'Check out'}
        color={'green'}
        width = {'218px'}/>
        </div>
  
    </div>
  )
}
