import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'
import conf from '../conf/conf'
const RTE = ({name,control,label, defaultValue=''}) => {
  return (
    <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
        <Controller
            name={name || 'content'}
            control={control}
            render={({ field: {onChange} }) => (
            <Editor
                apiKey={conf.RTE_API_KEY}
                initialValue={defaultValue}
                
                init={{
                height: 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                     alignleft aligncenter alignright alignjustify | \
                     bullist numlist outdent indent | removeformat | help'
                }}
                onEditorChange={(content, editor) => {
                    onChange(content);
                }}
            />
            )}
        />
    </div>
  )
}

export default RTE