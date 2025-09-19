import {useFormStatus} from 'react-dom'

export default function Submit() {

  // True or false whether it is submitting or not
  const { pending } = useFormStatus();

  return (
    <p className='actions'>
      <button type='submit' disabled={pending}>
        {pending ? 'Wait..' : 'Submit'}
      </button>
    </p>
  )
}



