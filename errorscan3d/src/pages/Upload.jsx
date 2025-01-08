import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import '../styles/Upload.scss'
import uploadicon from '../assets/upload.png'

function Upload() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('file-input').click();
  };

  return (
    <div className='upload'>
      <NavBar />
      <div className='upload-container' onClick={triggerFileInput}>
        <form>
          <div className='upload-itens'>
            <img src={uploadicon} className='form-img'/>

            <input
              id='file-input'
              type='file'
              style={{ display: 'none' }}
              accept='image/*'
              onChange={handleImageUpload} />

            <p className='upload-texto'><p className='upload-texto-destaque'>Clique aqui </p>para carregar a imagem</p>
            <p className='upload-texto'>Máximo de 5MB</p>
          </div>

        </form>
      </div>
      <div className='uploaded-container'>
        <div className='uploaded-container-white'>
          <div className='uploaded-container-img'>
            {image ? (
              <img src={image} alt="Uploaded" style={{ height: '50%' }} />
            ) : (
              <></>
            )}
          </div>
          <div className='uploaded-container-text'>
            <p>
              Análise da imagem
            </p>
            <p>
              Erro detectado: exemplo
            </p>
          </div>
        </div>


      </div>


    </div>
  )
}

export default Upload
