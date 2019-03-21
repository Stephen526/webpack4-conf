import obj from './a'
import './index.css'
import './style.less'
document.getElementById('app').innerHTML=JSON.stringify(obj)
document.getElementById('app').addEventListener('click',function(e){
    e.target.className='active'
})
if(module.hot){
    module.hot.accept()
}

console.log(1)
console.log(2)
<<<<<<< HEAD
console.log(3)

=======
>>>>>>> parent of d8d3957... 3
