import { useState } from "react";
import "../component/dealinner.css";
import img from "../component/imgs/2A1287H12_535x.jpg";
import img1 from "../component/imgs/4f69f547faecccd3a85477655718a0cd_700x.webp";
import img2 from "../component/imgs/6b3f7d23a9b574b1cff5a870afcb337e_700x.webp";
import img3 from "../component/imgs/69fdb9cfdc7e3cff963fdf0eede8de09_700x.webp";
import img4 from "../component/imgs/0187b5b7b69d0c6447d57b5b7ee48cbb_700x.webp";
import img5 from "../component/imgs/2dbcb88532fc824c9b1400f22a151b813_700x.webp";
import img6 from "../component/img/mc.png";
import img7 from "../component/img/visa.png";
import img8 from "../component/img/gcash.png";
import img9 from "../component/img/maya.jpg";
import img10 from "../component/img/jcb.jpg";
import img11 from "../component/img/amex.png";
import img12 from "../component/img/Warranty_572a7f3a-698b-407c-a3af-445a0f79b86b_195x.webp";
import img13 from "../component/img/SDD_195x.webp";
import img14 from "../component/img/FS_195x.webp";
import img15 from "../component/img/CS_195x.webp";
const Dealinnerr = () => {
  const [toggle, setToggle] = useState(1);

  const [quantity, setQuantity] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [selectedImage, setSelectedImage] = useState(img);

  const images = [img, img1, img2, img3, img4, img5];

  return (
    <>
      <div className="App">
        <div className="image-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <div className="whole">
          {selectedImage && (
            <div>
              <img src={selectedImage ? selectedImage : img} alt="Selected" />
            </div>
          )}
        </div>
        <div className="product-page">
          <h1 className="product-title">
            Anker PowerCore Metro Essential (20,000mAh) PD
          </h1>
          <div className="product-pricing">
            <span className="current-price">₱3,339.60</span>
            <span className="original-price">₱3,795.00</span>
            <span className="discount">SAVE 12%</span>
          </div>
          <div className="product-details">
            <p className="product-advantage">
              <strong>The Anker Advantage:</strong> Join the 50 million+ powered
              by our leading technology.
            </p>
            <p className="product-capacity">
              <strong>Ultra-High cell Capacity:</strong> The massive 20,000mAh
              cell capacity provides more than 5 and a half charges for iPhone
              XS, more than 4 full charges for Samsung Galaxy S10, and over 2
              and a half charges for iPad mini 5.
            </p>
            <p className="product-charging">
              <strong>High-Speed Charging:</strong> Deliver an 18W high-speed
              charge to phones, tablets, and more via the USB-C power delivery
              port or the Qualcomm Quick Charge-enabled USB port.
            </p>
            <p className="product-recharge">
              <strong>Rapid Recharge:</strong> Pair the included USB-C to USB-C
              cable with an 18W Power Delivery wall charger (not included) to
              refuel your PowerCore in less than 7 hours. Please note:
              Recharging with a normal USB wall charger will take approximately
              20 hours.
            </p>
            <p className="product-includes">
              <strong>What You Get:</strong> PowerCore Essential 20000 PD, USB-C
              to C cable, travel pouch, welcome guide, our worry-free 18-month
              warranty, and friendly customer service. (USB-A to C cable and
              Power Delivery wall charger not included.)
            </p>
          </div>
          <div className="product-quantity">
            <label htmlFor="quantity">Quantity:</label>
            <div className="quantity-control">
              <button onClick={decrementQuantity}>-</button>
              <input type="text" id="quantity" value={quantity} readOnly />
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>
          <div className="product-actions">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-it-now">Buy It Now</button>
            <button className="add-to-wishlist">Add to Wishlist</button>
          </div>
          <div className="payment-methods">
            <p>Checkout safely using your preferred payment method</p>
            <div className="payment-icons">
              <img src={img6} alt="Visa" />
              <img src={img7} alt="Cash on Delivery" />
              <img src={img8} alt="GCash" />
              <img src={img9} alt="Maya" />
              <img src={img10} alt="Mastercard" />
              <img src={img11} alt="American Express" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <section>
        <div className="desc">
          <div className="note">
            <li onClick={() => updateToggle(1)}>DESCRIPTION</li>
            <li onClick={() => updateToggle(2)}>SPECIFICATION</li>
            <li onClick={() => updateToggle(3)}>COMPATIBILITY</li>
            <li onClick={() => updateToggle(4)}>NOTE</li>
          </div>
          <div className="bob"></div>
        </div>
        <div className={toggle === 1 ? "show-content" : "content"}>
          <div className="product-description">
            <h1>
              The Anker Advantage: Join the 50 million+ powered by our leading
              technology.
            </h1>
            <ul>
              <li>
                <strong>Ultra-High cell Capacity:</strong> The massive 20,000mAh
                cell capacity provides more than 5 and a half charges for iPhone
                XS, more than 4 full charges for Samsung Galaxy S10, and over 2
                and a half charges for iPad mini 5.
              </li>
              <li>
                <strong>High-Speed Charging:</strong>
                deliver an 18W high-speed charge to phones, Tablets, and more
                via the USB-C power delivery port or the Qualcomm Quick
                Charge-enabled USB port.
              </li>
              <li>
                <strong>Rapid Recharge:</strong>
                Pair the included USB-C to USB-C cable with an 18W Power
                Delivery wall charger (not included) to refuel your PowerCore in
                less than 7 hours. Please note: Recharging with a normal USB
                wall charger will take approximately 20 hours.
              </li>
              <li>
                <strong>What You Get:</strong>
                PowerCore Essential 20000 PD, USB-C to C cable, travel pouch,
                welcome guide, our worry-free 18-month warranty, and friendly
                customer service. (USB-A to C cable and Power Delivery wall
                charger not included.)
              </li>
            </ul>
          </div>
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
          <div className="cont">
            <ul>
              <li>
                <strong>Powerbank Capacity Size:</strong> 10001 - 20000mAh
              </li>
              <li>
                <strong>Number of Ports:</strong> 2
              </li>
              <li>
                <strong>Powerbank Features:</strong> Fast Charging
              </li>
              <li>
                <strong>Input Type:</strong> Type C
              </li>
              <li>
                <strong>Battery Capacity:</strong> 20000 Milliamp Hours
              </li>
              <li>
                <strong>Batteries:</strong> 1 Lithium Polymer batteries required
                (included)
              </li>
              <li>
                <strong>Connector Type:</strong> USB C, Lightning
              </li>
              <li>
                <strong>Total USB Ports:</strong> 1
              </li>
              <li>
                <strong>Special Features:</strong> Fast Charger, Portable
              </li>
              <li>
                <strong>Compatible Phone Models:</strong> iPhone models, Android
                Phones
              </li>
              <li>
                <strong>Product Dimensions:</strong> 6.38 x 2.91 x 0.98 inches
              </li>
              <li>
                <strong>Item Weight:</strong> 12.2 ounces
              </li>
            </ul>
          </div>
        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
          <div className="apple">
            <p>Apple</p>

            <p className="pt-8 pb-2">iPhone</p>
            <li>iPhone 11</li>
            <li>iPhone 12 mini</li>
            <li>iPhone 12</li>
            <li>iPhone 12 Pro</li>
            <li>iPhone 12 Pro Max</li>
            <li>iPhone XS</li>
            <li>iPhone XS Max</li>
            <li>iPhone XR</li>

            <p className="pt-20 pb-8">Android Smartphones</p>
            <p className="pt-14 pb-2">Samsung Galaxy Series</p>
            <p> Galaxy S10, S20, S21, Note10, Note20</p>

            <p className="pt-14 pb-2">Google Pixel Series</p>
            <p> Pixel 3, 4, 5, 6</p>
            <p className="pt-14 pb-2">OnePlus Series</p>
            <p> OnePlus 6, 7, 8, 9</p>
            <p className="pt-14 pb-2">Huawei P and Mate Series</p>
            <p>P30, P40, Mate 20, Mate 30</p>
            <p className="pt-14 pb-2">Motorola Moto Series</p>
            <p>Moto G7, G8, G9</p>
            <p className="pt-14 pb-2">LG G and V Series</p>
            <p> LG G8, G9, V40, V50</p>
            <p className="pt-20 pb-8">Tablets</p>
            <p className="pt-14 pb-2">Samsung Galaxy Tab Series</p>
            <p>Galaxy Tab S6, S7</p>
            <p className="pt-14 pb-2">Google Nexus 7 (2013 version)</p>
            <p>
              {" "}
              It uses a micro-USB port, so a USB-C to micro-USB cable is needed.
            </p>
            <p className="pt-14 pb-2">
              Other Android-based tablets with USB-C or micro-USB charging
              ports.
            </p>
            <p className="pt-20 pb-8">Other USB Devices</p>
            <p className="pt-14 pb-2">Portable Gaming Devices</p>
            <p> Nintendo Switch</p>
            <p className="pt-14 pb-2">Wireless Earbuds and Headphones</p>
            <p> Samsung Galaxy Buds, Google Pixel Buds</p>
            <p className="pt-14 pb-2">Action Cameras and Digital Cameras</p>
            <p> with USB charging capability</p>
            <p> Samsung Galaxy Buds, Google Pixel Buds</p>
            <p className="pt-14 pb-2">Wearables</p>
            <p>smartwatches and fitness trackers with USB chargingCameras</p>
            <p className="pt-14 pb-2">smartwatches and fitness</p>
            <p>trackers with USB chargingCameras</p>
            <p>smartwatches and fitness trackers with USB chargingCameras</p>
            <p className="pt-14 pb-2">USB-C Powered Laptop</p>
            <p>
              {" "}
              MacBook Air, Dell XPS 13 (Note: Compatibility depends on the
              laptops power requirements.)
            </p>
          </div>
        </div>
        <div className={toggle === 4 ? "show-content" : "content"}>
          <div className="usb">
            <li>
              USB-A to USB-C cable, Lightning cable, and wall charger not
              included.
            </li>
            <li>
              When the trickle-charging mode is on, the last LED light will
              remain green, regardless of battery status.
            </li>
            <li>
              Recharging via USB-A charger will take approximately 20 hours.
            </li>
            <li>
              When charging an iPad, make sure the portable charger has at least
              2 LEDs illuminated, otherwise charging speed will be insufficient
            </li>
            <li>
              20,000mAh is the total of the nominal rated capacity of internal
              battery cells.
            </li>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-between w-[40%] m-auto">
        <img src={img12} alt="img1" className="w-[80px]" />
        <img src={img13} alt="img2" className="w-[80px]" />
        <img src={img14} alt="img3" className="w-[80px]" />
        <img src={img15} alt="img4" className="w-[80px]" />
      </div>
      <div className="review-system">
        <div className="flex flex-col">
          <p className="s5">5</p>
          <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="stars">
                ★
              </div>
            ))}
          </div>
          <p>5 reviews</p>
        </div>
        <div className="flex flex-row">
          <div className="review-counts">
            {[5, 4, 3, 2, 1].map((count, index) => (
              <div key={index} className="count">
                {count}
              </div>
            ))}
          </div>
          <div>
            {[...Array(5)].map((_, index) => (
              <div key={index} className="star">
                ★
              </div>
            ))}
          </div>
          <div className="pt-3">
            <div className="stra mb-7"></div>
            <div className="strai mb-7"></div>
            <div className="strai mb-7"></div>
            <div className="strai mb-6"></div>
            <div className="strai"></div>
          </div>
        </div>
        <div>
          <p className="sha">Share your experience</p>
          <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="stars justify-center items-center m-auto"
              >
                ★
              </div>
            ))}
          </div>
          <button className="write-review-btn">Write a Review</button>
        </div>
      </div>
      <div className="review">
        <div className="review-header">
          <div className="flex flex-col">
            <div className="avatar">
              <div className="username">
                <p className="font-light ">J</p>
              </div>
            </div>
            <p className="font-bold pt-4">jolo</p>
          </div>
          </div>
          <div className="rev">
          <div className="review-details">
            <span className="rating">★★★★★</span>
            <span className="date">2023-09-19</span>
            <span className="verified">Verified buyer</span>
          </div>
        
        <div className="review-body">
          This power bank is amazing. It charged my phone a lot of times. It was
          able to do fast charging and can be charged fast as well. My sister
          borrowed it due to her college life. I used to have Xiaomi and Ugreen
          power banks but theyre not efficient at charging my devices. I plan to
          buy another Anker Power Bank due to my awesome experience on Anker
        </div>
        </div>
      </div>
      <div className="review">
        <div className="review-header">
          <div className="flex flex-col">
            <div className="avatar">
              <div className="username">
                <p className="font-light ">S</p>
              </div>
            </div>
            <p className="font-bold pt-4">SHALYN</p>
          </div>
          </div>
          <div className="rev">
          <div className="review-details">
            <span className="rating">★★★★★</span>
            <span className="date">2023-09-19</span>
            <span className="verified">Verified buyer</span>
          </div>
        
        <div className="review-body">
        this is my first time to buy this item(ANKER) before bought it i review all the cooments and reviews. When it arrived yesterday i was so excited cos i know its my first original POWERBANK after all. And it turn out amazing when unboxing cos very secured and safe. Complete manual, and charger. It amazed me a lot. I charged my phone after opening the powerbank and tarannnnn my cellphone is full batt and their still remaining battery in the powerbank. When i got home i charge it and its fast charging PB. So happy with my PURCHASED.... THANKS ANKER
        </div>
        </div>
      </div>
      <div className="review">
        <div className="review-header">
          <div className="flex flex-col">
            <div className="avatar">
              <div className="username">
                <p className="font-light ">w</p>
              </div>
            </div>
            <p className="font-bold pt-4">Whaylie Bayya</p>
          </div>
          </div>
          <div className="rev">
          <div className="review-details">
            <span className="rating">★★★★★</span>
            <span className="date">2023-09-19</span>
            <span className="verified">Verified buyer</span>
          </div>
        
        <div className="review-body">
        It is my 1st time purchasing Anker PB. Fast delivery. Awesome customer support (Messenger)❣️. Upon unboxing, I am already amazed🔥. The PB is compact, stylish, looks real durable. What you see is what you get. Details and info are exactly as advertised⭐️⭐️⭐️. Less than 5 hours full recharge time, charges my Galaxy S21 fast, and can full recharge for more than 4x⚡️⚡️⚡️. Thank you Anker for this technology. Will probably buy from your store again. 💪🙏
        </div>
        </div>
      </div>
      <div className="review">
        <div className="review-header">
          <div className="flex flex-col">
            <div className="avatar">
              <div className="username">
                <p className="font-light ">J</p>
              </div>
            </div>
            <p className="font-bold pt-4">Johann</p>
          </div>
          </div>
          <div className="rev">
          <div className="review-details">
            <span className="rating">★★★★★</span>
            <span className="date">2023-09-19</span>
            <span className="verified">Verified buyer</span>
          </div>
        
        <div className="review-body">
        Bought this power bank in GH V-mall Anker store and was supposedly going to look at prices first, but I had bought one on the same day as it was on sale. The price was reasonable as it was 20,000 mah with Qualcomm 3.0 and PD. Ive had 2 old Anker power banks that I bought 4 years ago, and I still use them to this day and still hold its charge.
        </div>
        </div>
      </div>
      <div className="review">
        <div className="review-header">
          <div className="flex flex-col">
            <div className="avatar">
              <div className="username">
                <p className="font-light ">E</p>
              </div>
            </div>
            <p className="font-bold pt-4">Eunice</p>
          </div>
          </div>
          <div className="rev">
          <div className="review-details">
            <span className="rating">★★★★★</span>
            <span className="date">2023-09-19</span>
            <span className="verified">Verified buyer</span>
          </div>
        
        <div className="review-body">
        Ive owned Anker products for about four years now, and have never been disappointed in any of them. As for this specific power bank, I took one when I thru-hiked the Appalachian Trail and it worked wonders. It even had enough juice to supply some of my hiking friends w/ charges.
        </div>
        </div>
      </div>
    </>
  );
};

export default Dealinnerr;
