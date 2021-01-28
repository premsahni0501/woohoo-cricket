import { useEffect, useRef } from "react"
import ImageEditor from 'tui-image-editor'
import 'tui-image-editor/dist/tui-image-editor.min.css'

const ImageEditorUI = () => {
  const ref = useRef()
  const editorRef = useRef()
  useEffect(() => {
    editorRef.current = new ImageEditor(ref.current, {
      includeUI: {
        loadImage: {
          path: 'images/vegeta.jpg',
          name: 'SampleImage'
        },
        initMenu: 'filter',
        menuBarPosition: 'bottom'
      },
      cssMaxWidth: 700,
      cssMaxHeight: 700,
      selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70
      },
    })
    console.log(editorRef.current)

  }, [])
  return (
    <div ref={ref} className="container-fluid my-3" style={{ minHeight: 800 }}></div>
  )
}

export default ImageEditorUI