       // get elemen by id
       let day = document.getElementById('day')
       let date = document.getElementById('date')
       let month = document.getElementById('month')
       let year = document.getElementById('year')
       
       // name
       let day_name;
       let month_name;
       
       // get number
       let day_number = new Date().getDay();
       let date_number = new Date().getDate();
       let month_number= new Date().getMonth();
       let year_number = new Date().getFullYear();

       // call function
       getDay(day_number);
       getMonth(month_number);

       // input to html
       day.innerHTML = day_name;
       date.innerHTML = date_number;
       month.innerHTML = month_name;
       year.innerHTML = year_number;

       // Get Month Name
       function getMonth(month_number) {
           m_name = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
           return month_name = m_name[month_number];
       }
       
       // Get Day Name
       function getDay(day_number) {
           d_name = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
           return day_name = d_name[day_number-1];
       };

       // clock
       setInterval(() => {       

           let hours = document.getElementById('hours');
           let minutes = document.getElementById('minutes');
           let seconds = document.getElementById('seconds');
           let ampm = document.getElementById('ampm');

           let hh = document.getElementById('hh');
           let mm = document.getElementById('mm');
           let ss = document.getElementById('ss');

           let hr_dot = document.querySelector('.hr_dot');
           let min_dot = document.querySelector('.min_dot');
           let sec_dot = document.querySelector('.sec_dot');

           let h = new Date().getHours();
           let m = new Date().getMinutes();
           let s = new Date().getSeconds();
           
           let am = h >= 12 ? "PM" : "AM";
           
           h = (h < 10) ? "0" + h : h; //Nol di depan 
           m = (m < 10) ? "0" + m : m; //Nol di depan 
           s = (s < 10) ? "0" + s : s; //Nol di depan 
           
           hours.innerHTML = h + "<br> <span>Hours<span>";
           minutes.innerHTML = m + "<br> <span>Minutes<span>";
               seconds.innerHTML = s + "<br> <span>Seconds<span>";
                   ampm.innerHTML = am;
                   
                   hh.style.strokeDashoffset = 440 - (440 * h) / 12;
           mm.style.strokeDashoffset = 440 - (440 * m) / 60;
           ss.style.strokeDashoffset = 440 - (440 * s) / 60;

           hr_dot.style.transform = `rotate(${h * 30}deg)`;
           min_dot.style.transform = `rotate(${m * 6}deg)`;
           sec_dot.style.transform = `rotate(${s * 6}deg)`;

       })