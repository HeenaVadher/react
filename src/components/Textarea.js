import React from 'react'

export const Textarea = () => {
    return (
        <>
            <div className="inline-block relative w-full  space-y-3">
                <label className="block text-darkBlue text-sm font-semibold " htmlFor="bio">   Bio</label>
                <textarea type='text' placeholder='Bio'   className='w-full resize-none font-Manrope text-[#878A8D] md:text-sm text-[12px] rounded-2xl md:h-28 h-20 text-left p-2  placeholder:text-charcoalGray2 border-[1px] border-bordergray focus:outline-none  no-scrollbar overflow-y-auto ' >
                    It is simply dummy text of the printing and industry. Lorem Ipsum summy text of k.scrambled it to make a type specimen book.It is simply dummy text of the printing and industry. Lorem Ipsum summy text of k.scrambled it to make a type specimen book.It is simply dummy text.
                </textarea>

            </div>

        </> 
    )
}
