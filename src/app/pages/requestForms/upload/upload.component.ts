import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
  
})

export class UploadComponent implements OnInit {

  selected?: string;
  ethnicGroup: string[] = [
    'Zhuang',
    'Hui',
    'Manchu',
    'Uyghur',
    'Miao',
    'Yi',
    'Tujia',
    'Tibetan',
    'Mongol',
    'Dong',
    'Bouyei',
    'Yao',
    'Bai',
    'Joseonjok',
    'Hani',
    'Li',
    'Kazakh',
    'Dai',
    'She',
    'Lisu',
    'Dongxiang',
    'Gelao',
    'Lahu',
    'Wa',
    'Sui',
    'Nakhi',
    'Qiang',
    'Tu',
    'Mulao',
    'Xibe',
    'Kyrgyz',
    'Jingpo',
    'Daur',
    'Salar',
    'Blang',
    'Maonan',
    'Tajik',
    'Pumi',
    'Achang',
    'Nu',
    'Evenki',
    'Vietnamese',
    'Jino',
    'De ang',
    'Bonan',
    'Russian',
    'Yugur',
    'Uzbek',
    'Monba',
    'Oroqen',
    'Derung',
    'Hezhen',
    'Gaoshan',
    'Lhoba',
    'Tatars',
    'Undistinguished',
    'Naturalized Citizen'
  ]

  selected2?: string;
  occupation: string[] = [
    'Deputy',
    'Director',
    'Professor',
    'Worker',
    'Actress',
    'Agent',
    'Assistant',
    'Editor-in-Chief',
    'Assistant Lieutenant',
    'Assistant Professor',
    'Associate Professor',
    'Cadre',
    'Chairman',
    'Chief',
    'Chief Engineer',
    'Christian Priest',
    'Clerk',
    'Deputy Director',
    'Deputy Secretary',
    'Deputy Secretary General'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  url=""

  onselectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }

}
