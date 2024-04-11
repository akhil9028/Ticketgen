var urlParams = new URLSearchParams(window.location.search);
var totalFare = urlParams.get("totalFare");
var tickets = urlParams.get("tickets");
var idd = urlParams.get("id");
console.log("value = " + totalFare);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("passPrice").textContent = totalFare;
  document.getElementById("bus-id").textContent = idd;
  // document.getElementById("time").textContent = timeString;
  // document.getElementById("date").textContent = dateString;
  document.getElementById("tickets").textContent = tickets;

  console.log("totalFare = " + totalFare);
});

<iframe
  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d60536.61653750632!2d73.83871964284276!3d18.50455056058706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bc2bfb732af849d%3A0xd4078b48b3fe44f0!2sKothrud%2C%20Pune%2C%20Maharashtra!3m2!1d18.507351399999997!2d73.8076543!4m5!1s0x3bc2e9ff81f1aae9%3A0x2560343555ac8b53!2sHadapsar%2C%20Pune%2C%20Maharashtra!3m2!1d18.508934!2d73.92591019999999!5e0!3m2!1sen!2sin!4v1712688855219!5m2!1sen!2sin"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>;

<iframe
  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d60518.97246344319!2d73.88424986397871!3d18.554382181429503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bc2c058f1287049%3A0x47a399e0464970f1!2sPune%2C%20Ambegaon%20Budruk%2C%20Pune%2C%20Maharashtra%20411001!3m2!1d18.5292922!2d73.87424659999999!4m5!1s0x3bc2c3819fdef877%3A0xd4193e985f354be0!2sWagholi%2C%20Pune%2C%20Maharashtra!3m2!1d18.5807719!2d73.9787063!5e0!3m2!1sen!2sin!4v1712692013116!5m2!1sen!2sin"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>;

<iframe
  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d121033.98574882926!2d73.68688995678731!3d18.559965019923037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bc2c064addc421d%3A0x5398e1f45b307f8d!2zUHVuZSBNYW5hcGEgQnVzIFN0YXRpb24sIOCkleClieCkguCkl-CljeCksOClh-CkuCDgpLngpL7gpIrgpLgg4KSw4KS44KWN4KSk4KS-LCDgpLbgpL_gpLXgpL7gpJzgpYAg4KSo4KSX4KSwLCBQdW5lLCA0MTEwMDU!3m2!1d18.523265!2d73.853893!4m5!1s0x3bc2bb12c2bca185%3A0xb3879fc3627adcf4!2sPhase%203%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!3m2!1d18.5868397!2d73.68599499999999!5e0!3m2!1sen!2sin!4v1712692280141!5m2!1sen!2sin"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>;

<iframe
  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d121042.56686767674!2d73.74533120639269!3d18.547862729904676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bc2b8fc93e91b91%3A0x34e8b2c5caec78fe!2sPimpri%20Gaon%2C%20Pimpri%20Colony%2C%20Pimpri-Chinchwad%2C%20Maharashtra!3m2!1d18.606902299999998!2d73.7992634!4m5!1s0x3bc2c020f86e3cc3%3A0xa796d6342ce667e5!2sMarket%20Yard%2C%20Gultekadi%2C%20Pune%2C%20Maharashtra!3m2!1d18.4876541!2d73.8683697!5e0!3m2!1sen!2sin!4v1712692365357!5m2!1sen!2sin"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>;
