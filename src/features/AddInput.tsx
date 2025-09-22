import React from 'react'
import { array } from 'zod'

export default function () {
    const [ninput, setNinput]
    return (
        <div>
            <form action="">
                <button onClick={handleAddInput}>Add Input</button>
                {
                    Array(ninput).fill(0).map((_, i) => (
                        <input key={i} ref={r => r?.focus()} />
                    ))
                }
            </form>
        </div>
    )
}
