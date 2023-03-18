import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
url: string =""
  constructor(private storage: Storage) { }

  public uploadImage($event: any,name: string) {
    const file=$event.target.file[2]
    /*console.log(file); "No funciono en como en el video MGB parte 20 1:07:00"*/
    const imageRef = ref(this.storage, `imagen/` + name)
    uploadBytes(imageRef,file)
    .then(response => {this.getImage()})
    .catch(error => console.log(error)
    )     
  }

  getImage(){
  const imagesRef = ref(this.storage,'imagen')
  list(imagesRef)
  .then(async response => {
    for(let item of response.items){
      this.url =await getDownloadURL(item);
      console.log("La url es: " + this.url);
  }
})
  .catch(error => console.log(error))
  }
}
