import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  projectPosts = [
    {
      id:1,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:true
    },
    {
      id:2,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:false
    },
    {
      id:3,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:true
    },
    {
      id:4,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:false
    },
    {
      id:5,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:true
    },
    {
      id:6,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:false
    },
    {
      id:7,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:true
    },
    {
      id:8,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:true
    },
    {
      id:9,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:true
    },
    {
      id:10,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:false
    }
  ];
  FreelancerPosts = [
    {
      id:1,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:true
    },
    {
      id:2,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:false
    },
    {
      id:3,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:true
    },
    {
      id:4,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:true
    },
    {
      id:5,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:false
    },
    {
      id:6,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:true
    },
    {
      id:7,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:false
    },
    {
      id:8,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:true
    },
    {
      id:9,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:true
    },
    {
      id:10,
      image:"https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
      name:"ნიკა",
      lastname:"გარაშვილი",
      profession:"UI Designer",
      experience:1,
      price:{from:250,to:300},
      about:"იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.",
      stars:3,
      saved:false
    }
  ];

  categories = [
    "all",
    "Front End Developer",
    "Back End Developer",
    "Full Stack Developer",
    "Graphic Designer",
    "UI/UX Designer"
  ];

  profileInfo = [
    {
      id:1,
      name:"ნიკა",
      lastname:"გაროშვილი",
      profession:"UI Designer",
      languages:[
        {lang:"ინგლისური",lvl:"C1"},
        {lang:"რუსული",lvl:"A2"},
        {lang:"გერმანული",lvl:"B1"}
      ],
      links:{
        dribble:"www.stackoverflow.com",
        behance:"www.stackoverflow.com",
        linkedin:"www.stackoverflow.com",
        gmail:"www.stackoverflow.com"
      },
      feedback:[
        {
          id:1,
          name:"გიგი",
          lastname:"ადამია",
          rated:4,
          comment:"ანექსირებულ იქნა ინდოეთის მიერ და დამანთან და დიუსთან ერთად მოკავშირე ტერიტორიად გამოცხადდა. 1987 წლიდან დამოუკიდებელი შტატია",
          date:"2001-02-21"
        },
        {
          id:1,
          name:"გიგი",
          lastname:"ადამია",
          rated:4,
          comment:"ანექსირებულ იქნა ინდოეთის მიერ და დამანთან და დიუსთან ერთად მოკავშირე ტერიტორიად გამოცხადდა. 1987 წლიდან დამოუკიდებელი შტატია",
          date:"2001-02-21"
        }
      ],
      about:"სა­მე­დი­ცი­ნო ცენ­ტრში აცხა­დე­ბენ, რომ სა­ა­ვად­მყო­ფოს 7 214 თა­ნამ­შრო­მელს შო­რის, რომ­ლებ­საც ვაქ­ცი­ნის პირ­ვე­ლი დოზა იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.Sheba Medical Center-ის ეპი­დე­მი­ო­ლოგ­მა, გილი რე­გევ-იო­ჩა­იმ გან­მარ­ტა, რომ ადა­მი­ა­ნე­ბი, რომ­ლებ­ზეც სა­ა­ვად­მყო­ფო­ში კვლე­ვა ჩა­ა­ტა­რეს, ძი­რი­თა­დად ახალ­გაზ­რდე­ბი და ჯან­მრთე­ლე­ბი იყ­ვნენ.სა­მე­დი­ცი­ნო ცენ­ტრში აცხა­დე­ბენ, რომ სა­ა­ვად­მყო­ფოს 7 214 თა­ნამ­შრო­მელს შო­რის, რომ­ლებ­საც ვაქ­ცი­ნის პირ­ვე­ლი დოზა იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.Sheba Medical Center-ის ეპი­დე­მი­ო­ლოგ­მა, გილი რე­გევ-იო­ჩა­იმ გან­მარ­ტა, რომ ადა­მი­ა­ნე­ბი, რომ­ლებ­ზეც სა­ა­ვად­მყო­ფო­ში კვლე­ვა ჩა­ა­ტა­რეს, ძი­რი­თა­დად ახალ­გაზ­რდე­ბი და ჯან­მრთე­ლე­ბი იყ­ვნენ.",
      price:{from:800,to:900},
      experience:1,
      workTime:{from:5,to:7},
      skill:["გრაფიკული დიზაინი UX დიზაინი"]
    },
    {
      id:2,
      name:"გიგი",
      lastname:"ადამია",
      profession:"UI Designer",
      languages:[
        {lang:"ინგლისური",lvl:"C1"},
        {lang:"რუსული",lvl:"A2"},
        {lang:"გერმანული",lvl:"A1"},
        {lang:"ფრანგული",lvl:"B2"},
        {lang:"ჩინური",lvl:"A2"},
        {lang:"ჩეხური",lvl:"B1"}
      ],
      links:{
        dribble:"www.stackoverflow.com",
        behance:"www.stackoverflow.com"
      },
      feedback:[
        {
          id:1,
          name:"ნიკა",
          lastname:"გაროშვილი",
          rated:4,
          comment:"ანექსირებულ იქნა ინდოეთის მიერ და დამანთან და დიუსთან ერთად მოკავშირე ტერიტორიად გამოცხადდა. 1987 წლიდან დამოუკიდებელი შტატია",
          date:"2001-02-21"
        },
        {
          id:1,
          name:"ნიკა",
          lastname:"გაროშვილი",
          rated:4,
          comment:"ანექსირებულ იქნა ინდოეთის მიერ და დამანთან და დიუსთან ერთად მოკავშირე ტერიტორიად გამოცხადდა. 1987 წლიდან დამოუკიდებელი შტატია",
          date:"2021-02-21"
        }
      ],
      about:"სა­მე­დი­ცი­ნო ცენ­ტრში აცხა­დე­ბენ, რომ სა­ა­ვად­მყო­ფოს 7 214 თა­ნამ­შრო­მელს შო­რის, რომ­ლებ­საც ვაქ­ცი­ნის პირ­ვე­ლი დოზა იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.Sheba Medical Center-ის ეპი­დე­მი­ო­ლოგ­მა, გილი რე­გევ-იო­ჩა­იმ გან­მარ­ტა, რომ ადა­მი­ა­ნე­ბი, რომ­ლებ­ზეც სა­ა­ვად­მყო­ფო­ში კვლე­ვა ჩა­ა­ტა­რეს, ძი­რი­თა­დად ახალ­გაზ­რდე­ბი და ჯან­მრთე­ლე­ბი იყ­ვნენ.სა­მე­დი­ცი­ნო ცენ­ტრში აცხა­დე­ბენ, რომ სა­ა­ვად­მყო­ფოს 7 214 თა­ნამ­შრო­მელს შო­რის, რომ­ლებ­საც ვაქ­ცი­ნის პირ­ვე­ლი დოზა იან­ვარ­ში გა­უ­კე­თეს, 15-28 დღე­ში კო­ვიდ 19-ით ინ­ფი­ცი­რე­ბის სიმპტო­მუ­რი შემ­თხვე­ვე­ბი 85%-ით შემ­ცირ­და. მა­თი­ვე ინ­ფორ­მა­ცი­ით, სა­ერ­თო ჯამ­ში, ასიმპტო­მუ­რი შემ­თხვე­ვე­ბის ჩათ­ვლით, ინ­ფი­ცი­რე­ბის მაჩ­ვე­ნე­ბელ­მა 75%-ით იკლო.Sheba Medical Center-ის ეპი­დე­მი­ო­ლოგ­მა, გილი რე­გევ-იო­ჩა­იმ გან­მარ­ტა, რომ ადა­მი­ა­ნე­ბი, რომ­ლებ­ზეც სა­ა­ვად­მყო­ფო­ში კვლე­ვა ჩა­ა­ტა­რეს, ძი­რი­თა­დად ახალ­გაზ­რდე­ბი და ჯან­მრთე­ლე­ბი იყ­ვნენ.",
      price:{from:500,to:900},
      experience:2,
      workTime:{from:5,to:7},
      skill:["გრაფიკული დიზაინი UX დიზაინი","Full Stack Developer"]
    }
  ];

  about = {
    about:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
    members:[
      {
        name:"თემო",
        lastname:"მელაძე",
        image:"https://cf-images.ap-southeast-2.prod.boltdns.net/v1/static/3910869709001/88be9268-f47a-4838-b32d-6d474dfc6421/653db88d-5a9e-4d09-9818-01124c913f9a/729x410/match/image.jpg",
        role:"UX Designer"
      },
      {
        name:"თემო",
        lastname:"მელაძე",
        image:"https://cf-images.ap-southeast-2.prod.boltdns.net/v1/static/3910869709001/88be9268-f47a-4838-b32d-6d474dfc6421/653db88d-5a9e-4d09-9818-01124c913f9a/729x410/match/image.jpg",
        role:"UX Designer"
      },
      {
        name:"თემო",
        lastname:"მელაძე",
        image:"https://cf-images.ap-southeast-2.prod.boltdns.net/v1/static/3910869709001/88be9268-f47a-4838-b32d-6d474dfc6421/653db88d-5a9e-4d09-9818-01124c913f9a/729x410/match/image.jpg",
        role:"UX Designer"
      },
      {
        name:"თემო",
        lastname:"მელაძე",
        image:"https://cf-images.ap-southeast-2.prod.boltdns.net/v1/static/3910869709001/88be9268-f47a-4838-b32d-6d474dfc6421/653db88d-5a9e-4d09-9818-01124c913f9a/729x410/match/image.jpg",
        role:"UX Designer"
      },
      {
        name:"თემო",
        lastname:"მელაძე",
        image:"https://cf-images.ap-southeast-2.prod.boltdns.net/v1/static/3910869709001/88be9268-f47a-4838-b32d-6d474dfc6421/653db88d-5a9e-4d09-9818-01124c913f9a/729x410/match/image.jpg",
        role:"UX Designer"
      },
      {
        name:"თემო",
        lastname:"მელაძე",
        image:"https://cf-images.ap-southeast-2.prod.boltdns.net/v1/static/3910869709001/88be9268-f47a-4838-b32d-6d474dfc6421/653db88d-5a9e-4d09-9818-01124c913f9a/729x410/match/image.jpg",
        role:"UX Designer"
      }
    ]
  };

  help = [
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას",
    "ვერ ვპოულობ გარკვეულ პროფესიას"
  ];
  
  chat = [
    {
      image:"https://img.redbull.com/images/c_crop,w_4044,h_2696,x_0,y_1244,f_auto,q_auto/c_scale,w_1500/redbullcom/2019/10/09/c7cfae77-17b1-46d9-aee0-f48944c9ce9b/tyler-the-creator",
      from:"ნიკოლოზ გაროშვილი",
      message:"თუ ჩვენ ყველას ერთი მიზანი გვაქვს მაშინ . . .",
      date:"2021-01-01",
      time:"12:22",
      stars:4
    },
    {
      image:"https://img.redbull.com/images/c_crop,w_4044,h_2696,x_0,y_1244,f_auto,q_auto/c_scale,w_1500/redbullcom/2019/10/09/c7cfae77-17b1-46d9-aee0-f48944c9ce9b/tyler-the-creator",
      from:"გიგი ადამია",
      message:"თუ ჩვენ ყველას ერთი მიზანი გვაქვს მაშინ . . .",
      date:"2021-01-01",
      time:"12:22",
      stars:4
    }
  ];
  constructor() {  }
}
