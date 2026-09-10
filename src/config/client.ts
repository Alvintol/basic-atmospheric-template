import type { ClientConfig } from '../types';

// Change this file for each client. Section order is page order.
export const client = {
  "demo": {
    "enabled": true,
    "label": "ATMOSPHERIC RETREAT",
    "note": "Created by Alvin · Fictional business"
  },
  "business": {
    "name": "Good Dog",
    "monogram": "✦",
    "location": "Calgary, Alberta"
  },
  "seo": {
    "title": "Good Dog — Atmospheric retreat demo",
    "description": "A quieter appointment. A gentler pace. A good day for your dog.",
    "language": "en-CA",
    "indexable": false
  },
  "ui": {
    "skipToContent": "Skip to content",
    "menuOpen": "Menu",
    "menuClose": "Close",
    "navigationLabel": "Main navigation",
    "backToTop": "Back to top"
  },
  "footer": {
    "note": "A quieter appointment. A gentler pace. A good day for your dog.",
    "copyright": "Good Dog is a fictional business. Photography is for demonstration only.",
    "links": []
  },
  "headerAction": {
    "label": "Book a visit",
    "href": "#contact"
  },
  "hero": {
    "eyebrow": "ONE-ON-ONE GROOMING IN CALGARY",
    "title": [
      "Escape the rush.",
      "Grooming with"
    ],
    "emphasis": "patience.",
    "description": "A quieter appointment, a gentler pace, and thoughtful care from hello to pickup.",
    "primaryAction": {
      "label": "Find an appointment",
      "href": "#contact"
    },
    "secondaryAction": {
      "label": "Your first visit",
      "href": "#process"
    },
    "image": {
      "src": "images/good-dog.webp",
      "alt": "A calm cream-coloured poodle sits on a grey chair in soft window light.",
      "width": 1800,
      "height": 1200,
      "position": "50% 50%"
    },
    "imageCaption": "A little time to settle in.",
    "locationLabel": "A QUIETER KIND OF CARE",
    "highlights": [
      {
        "title": "Calm first visits",
        "description": "Time to settle in."
      },
      {
        "title": "Full grooming",
        "description": "Bath, trim, nails."
      },
      {
        "title": "Comfort breaks",
        "description": "Never rushed."
      },
      {
        "title": "Quiet studio",
        "description": "One dog at a time."
      }
    ]
  },
  "sections": [
    {
      "type": "services",
      "id": "services",
      "title": "A little care goes a long way.",
      "eyebrow": "OUR SERVICES",
      "navLabel": "Services",
      "description": "Every dog is different. We’ll discuss coat, size, and comfort before confirming the appointment and price.",
      "items": [
        {
          "id": "groom",
          "title": "The full groom",
          "subtitle": "Bath, tidy, and a fresh feeling",
          "description": "A bath, dry, haircut or tidy, and nail care at a pace that works for your dog.",
          "price": "From $85 CAD"
        },
        {
          "id": "bath",
          "title": "Bath & brush",
          "subtitle": "A gentle refresh",
          "description": "A careful wash, dry, and brush for coats that need a fresh start between full grooms.",
          "price": "From $55 CAD"
        },
        {
          "id": "tidy",
          "title": "The little tidy",
          "subtitle": "Small details, more comfort",
          "description": "Nails, face, and paw tidy-ups to help your dog feel comfortable between visits.",
          "price": "From $25 CAD"
        }
      ]
    },
    {
      "type": "showcase",
      "id": "photos",
      "title": "Good faces. Gentle care.",
      "eyebrow": "THE GOOD DOG MOOD",
      "navLabel": "Our approach",
      "description": "Sample photography shown for this demo.",
      "layout": "portraits",
      "aspect": "portrait",
      "labels": {
        "previous": "Previous photos",
        "next": "Next photos",
        "show": "Show",
        "instructions": "Swipe, scroll, or use the arrows to explore.",
        "carousel": "carousel"
      },
      "items": [
        {
          "id": "1",
          "image": {
            "src": "images/good-dog.webp",
            "alt": "Cream poodle sitting calmly on a grey chair.",
            "width": 1800,
            "height": 1200,
            "position": "50% 50%"
          },
          "title": "A little time to settle.",
          "category": "At their pace",
          "description": "A calm hello makes a good beginning."
        },
        {
          "id": "2",
          "image": {
            "src": "images/good-dog-gallery-1.webp",
            "alt": "Relaxed brown-and-white dog resting its head on a sofa.",
            "width": 1800,
            "height": 1200,
            "position": "65% 50%"
          },
          "title": "Comfort comes first.",
          "category": "Room to relax",
          "description": "Space for a pause when your dog needs one."
        },
        {
          "id": "3",
          "image": {
            "src": "images/good-dog-gallery-2.webp",
            "alt": "Small Yorkshire terrier sitting on a sofa in warm sunlight.",
            "width": 1800,
            "height": 1201,
            "position": "50% 50%"
          },
          "title": "Home feeling good.",
          "category": "A fresh finish",
          "description": "Thoughtful care, right through to pickup."
        }
      ]
    },
    {
      "type": "process",
      "id": "process",
      "title": "Your first visit, gently does it.",
      "eyebrow": "A SIMPLE PROCESS",
      "navLabel": "First visit",
      "steps": [
        {
          "title": "Tell us about your dog",
          "description": "Share their breed, coat, routine, and anything that helps them feel comfortable."
        },
        {
          "title": "A calm introduction",
          "description": "We take a little time to settle in and agree on the care for this visit."
        },
        {
          "title": "A thoughtful pickup",
          "description": "We walk you through the groom and talk about what might help between visits."
        }
      ]
    },
    {
      "type": "faq",
      "id": "questions",
      "title": "Before you bring your best friend.",
      "eyebrow": "GOOD TO KNOW",
      "items": [
        {
          "question": "Can you work with a nervous dog?",
          "answer": "Tell us about your dog’s needs before booking. We’ll discuss whether our setting and approach are a good fit."
        },
        {
          "question": "How long does a visit take?",
          "answer": "It depends on coat, size, and the care agreed. We’ll provide an estimate and contact you when your dog is ready."
        },
        {
          "question": "How much will it cost?",
          "answer": "The prices shown are demo starting prices. Your groomer will confirm the quote after discussing your dog and their coat."
        }
      ]
    },
    {
      "type": "contact",
      "id": "contact",
      "title": "Let’s make their next visit a good one.",
      "eyebrow": "LET’S TALK",
      "navLabel": "Contact",
      "description": "Tell us a little about your dog and the care you’re looking for.",
      "method": {
        "mode": "demo",
        "submitLabel": "Preview enquiry",
        "help": "Demo form — nothing is sent or stored.",
        "success": "That’s how an enquiry would begin. This is a demo, so your message has not been sent."
      },
      "details": [
        {
          "label": "Service area",
          "value": "Calgary, Alberta"
        },
        {
          "label": "Hours",
          "value": "Tuesday–Saturday · By appointment"
        }
      ],
      "fields": {
        "name": "Your name",
        "email": "Email address",
        "service": "What can we help with?",
        "message": "Tell us a little more",
        "servicePlaceholder": "Choose a service",
        "services": [
          "The full groom",
          "Bath & brush",
          "The little tidy"
        ]
      }
    }
  ]
} satisfies ClientConfig;
