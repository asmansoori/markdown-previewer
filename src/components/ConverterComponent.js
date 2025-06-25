import React, {useState} from 'react'
import markdownit from 'markdown-it'
import DOMPurify from 'dompurify'

function Converter() {
    const [md, setMd] = useState('');
    const mdText = markdownit()
    const result = mdText.render(md || '# Write something in the the box');
    const clean = DOMPurify.sanitize(result)
    console.log(clean)
    return (
        <div>
            <div>
                <textarea value={md} onChange={e => {setMd(e.target.value)}}>
                </textarea>
            </div>
            <div dangerouslySetInnerHTML={{ __html: clean }}>
            </div>
        </div>
    )
}

export default Converter