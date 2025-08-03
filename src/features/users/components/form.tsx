import { useForm } from 'react-hook-form';
import { createContext } from '@wordpress/element';

interface formtype {
    name: string;

}

export default function form() {
    const { register } = useForm<formtype>()
    const [t, setT] = useState('');
    return (
        <form>
            <input type="text" {...register('name')} />
        </form>
    )
}
