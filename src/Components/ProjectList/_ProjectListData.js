import showAndTourCover from '../../assets/projects/covers/showtour.jpg'
import panoractivesCover from '../../assets/projects/covers/panoractives.jpg'
import bsuYoungLifeCover from '../../assets/projects/covers/bsu-younglife.jpg'
import brooksideCover from '../../assets/projects/covers/brookside.jpg'
import supportTrackerCover from '../../assets/projects/covers/support-tracker.jpg'
import rentBuyCover from '../../assets/projects/covers/rentbuy.jpg'

export const data = [
  {
    name: 'Show & Tour',
    slug: 'show-and-tour',
    cover: showAndTourCover,
    summary: 'This Ruby on Rails based web app allows real estate photographers and agents to create virtual tours highlighting their listings. Includes S3-hosted image uploads, Stripe integration, and multiple themes.',
    tags: [ 'rails', 'sass', 'bootstrap', 'html', 'css' ]
  },
  {
    name: 'Panoractives',
    slug: 'panoractives',
    cover: panoractivesCover,
    summary: 'A mobile-friendly WordPress site displaying full-page imagery, photo galleries, and online scheduling. Built on the Sydney theme by aThemes, with a child theme for needed customizations.',
    tags: [ 'wordpress', 'html', 'css' ]
  },
  {
    name: 'Boise State Young Life',
    slug: 'boise-state-young-life',
    cover: bsuYoungLifeCover,
    summary: 'A clean, friendly website built with WordPress for a local college ministry. Featuring an Instagram feed, embedded videos, and 100% mobile-friendly.',
    tags: [ 'wordpress', 'html', 'css' ]
  },
  {
    name: 'Brookside Dentistry',
    slug: 'brookside-dentistry',
    cover: brooksideCover,
    summary: 'A professional WordPress-based website built for an award-winning dental office. This site includes embedded reviews and videos, as well as downloadable patient forms.',
    tags: [ 'wordpress', 'html', 'css' ]
  },
  {
    name: 'Support Tracker',
    slug: 'support-tracker',
    cover: supportTrackerCover,
    summary: 'This is a full-featured, database-backed support ticket management web app. It features calendar and list views, a tagging system, metrics, and follow-up reminders.  ',
    tags: [ 'rails', 'sass', 'bootstrap', 'html', 'css' ]
  },
  {
    name: 'My Rent Will Buy',
    slug: 'my-rent-will-buy',
    cover: rentBuyCover,
    summary: 'A Ruby on Rails web app for getting a mortgage qualification estimate. Backed with a PostgreSQL database and featuring automatic email notifications.',
    tags: [ 'rails', 'sass', 'bootstrap', 'html', 'css' ]
  }
]
