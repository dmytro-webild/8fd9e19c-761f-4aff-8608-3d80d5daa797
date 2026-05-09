"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Heart, MessageSquare, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="fluid"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Rooms",
          id: "#rooms",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Dar Blue Pearl"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Your Peaceful Stay in the Heart of Chefchaouen"
      description="Experience authentic Moroccan hospitality in the Blue Pearl City. Comfort, breathtaking views, and calm await you."
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
        {
          text: "Call Now",
          href: "tel:+212644032313",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cozy-streets-blue-white-sunny-day-old-city-kasbah-udayas_181624-11168.jpg"
      showBlur={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/view-shot-from-anhui-old-village-hong-cun_1359-855.jpg",
          alt: "Happy guest 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-vertical-symmetric-shot-suburban-blue-building-with-plants-pots_181624-2164.jpg",
          alt: "Happy guest 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/art-religious-transilvanian-romanian-monastery-built-rustic-style_1268-19894.jpg",
          alt: "Happy guest 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/street-market-night_23-2151604341.jpg",
          alt: "Happy guest 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cozy-streets-blue-white-sunny-day-old-city-kasbah-udayas_181624-9332.jpg",
          alt: "Happy guest 5",
        },
      ]}
      avatarText="Loved by travelers worldwide"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="A Home Away From Home"
      description="Dar Blue Pearl offers an authentic blend of traditional Moroccan culture and modern comfort. Tucked away in the vibrant streets of the Medina, our hotel provides a serene escape for travelers seeking the real Chefchaouen."
      imageSrc="http://img.b2bpic.net/free-photo/sofa-pillow_74190-1925.jpg"
    />
  </div>

  <div id="rooms" data-section="rooms">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Standard",
          name: "Medina View Room",
          price: "From $60",
          rating: 5,
          reviewCount: "45",
          imageSrc: "http://img.b2bpic.net/free-photo/decoration-interior_74190-7336.jpg",
        },
        {
          id: "2",
          brand: "Luxury",
          name: "Blue Pearl Suite",
          price: "From $120",
          rating: 5,
          reviewCount: "82",
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-lively-home-interior-design_23-2151119016.jpg",
        },
        {
          id: "3",
          brand: "Standard",
          name: "Cozy Single Room",
          price: "From $45",
          rating: 4,
          reviewCount: "31",
          imageSrc: "http://img.b2bpic.net/free-photo/travel-scene-with-pastel-colors-dreamy-atmosphere_23-2151450695.jpg",
        },
        {
          id: "4",
          brand: "Luxury",
          name: "Rooftop Terrace Suite",
          price: "From $150",
          rating: 5,
          reviewCount: "68",
          imageSrc: "http://img.b2bpic.net/free-photo/bed-arrangements-still-life_23-2150533028.jpg",
        },
        {
          id: "5",
          brand: "Standard",
          name: "Family Room",
          price: "From $90",
          rating: 4,
          reviewCount: "22",
          imageSrc: "http://img.b2bpic.net/free-photo/pillow-bed_1203-3751.jpg",
        },
        {
          id: "6",
          brand: "Standard",
          name: "Garden View Room",
          price: "From $75",
          rating: 5,
          reviewCount: "54",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-pillow-sofa_74190-2066.jpg",
        },
      ]}
      title="Our Beautiful Rooms"
      description="Each room is uniquely designed with authentic Moroccan textures and colors."
    />
  </div>

  <div id="amenities" data-section="amenities">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Panoramic Rooftop",
          description: "Unbeatable views of the blue city and surrounding Rif mountains.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-friends-laying-bed-together_52683-91909.jpg",
        },
        {
          title: "Authentic Breakfast",
          description: "Homemade Moroccan breakfast served daily on the terrace.",
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-design-luxury-resort_23-2150497265.jpg",
        },
        {
          title: "Concierge Service",
          description: "We help you book guides, hikes, and local cooking classes.",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-decoration-inspired-by-mexican-folklore_23-2150711303.jpg",
        },
      ]}
      title="Why Guests Love Us"
      description="We go beyond just providing a bed; we provide a full Chefchaouen experience."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "4.2",
          title: "Star Rating",
          description: "Average across major platforms.",
          icon: Star,
        },
        {
          id: "m2",
          value: "226+",
          title: "Verified Reviews",
          description: "Authentic feedback from real guests.",
          icon: MessageSquare,
        },
        {
          id: "m3",
          value: "100%",
          title: "Commitment",
          description: "Dedicated to your comfort.",
          icon: Heart,
        },
      ]}
      title="Our Numbers"
      description="Trusted by hundreds of happy travelers from all over the world."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          handle: "France",
          testimonial: "An incredible experience. The rooftop view is unforgettable.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-talking-phone_23-2149901724.jpg",
        },
        {
          id: "2",
          name: "Michael C.",
          handle: "UK",
          testimonial: "Authentic, clean, and friendly. Best hotel in the Medina.",
          imageSrc: "http://img.b2bpic.net/free-photo/express-tenderness-cute-young-woman-keeping-smile-her-face-while-looking-away-wrapped-white-blanket_657921-113.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          handle: "USA",
          testimonial: "The staff made me feel at home. Highly recommend!",
          imageSrc: "http://img.b2bpic.net/free-photo/sunshine-architecture-fun-happy-arches_1304-1037.jpg",
        },
        {
          id: "4",
          name: "David K.",
          handle: "Morocco",
          testimonial: "Excellent service and very peaceful environment.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-young-caucasian-brunette-lady-wears-black-top-pants-hoodie-top-smiling-camera-cafe_197531-33294.jpg",
        },
        {
          id: "5",
          name: "Anna P.",
          handle: "Germany",
          testimonial: "Perfect location for exploring the blue city.",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-welldressed-arabian-man-with-glass-whiskey-cigar-posed-pub_627829-5863.jpg",
        },
      ]}
      title="Guest Stories"
      description="See why our guests keep returning to Dar Blue Pearl."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "What is the check-in time?",
          content: "Check-in is from 14:00.",
        },
        {
          id: "f2",
          title: "Is breakfast included?",
          content: "Yes, a delicious traditional breakfast is included.",
        },
        {
          id: "f3",
          title: "Can you arrange airport transfer?",
          content: "Yes, we can organize private transfers upon request.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/colorful-vibrant-indian-landscape_23-2151893903.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about your stay."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "canvas-reveal",
      }}
      tag="Get in touch"
      title="Ready to Book?"
      description="Have questions or want to secure your dates? Reach out via WhatsApp or phone, or send us an inquiry."
      inputPlaceholder="Your email address"
      buttonText="Send Inquiry"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Dar Blue Pearl"
      columns={[
        {
          title: "Discover",
          items: [
            {
              label: "Rooms",
              href: "#rooms",
            },
            {
              label: "Gallery",
              href: "#gallery",
            },
            {
              label: "Experiences",
              href: "#",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "+212 6 44 03 23 13",
              href: "tel:+212644032313",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/212644032313",
            },
            {
              label: "Instagram",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Dar Blue Pearl. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
