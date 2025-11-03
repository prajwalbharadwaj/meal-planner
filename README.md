# Meal Planner

A modern, intuitive weekly meal planning application built with React and Vite. Plan your breakfast, lunch, and dinner for the entire week with an easy-to-use interface.

## Features

- 📅 **Weekly View**: Visualize your entire week at a glance
- 🍽️ **Multi-Meal Planning**: Plan breakfast, lunch, and dinner for each day
- 📝 **Meal Details**: Add custom meal names and descriptions
- 🛒 **Shopping List**: Generate and manage your grocery shopping list
- 🎨 **Modern UI**: Built with Tailwind CSS and Radix UI components
- ✨ **Interactive**: Today's date is highlighted for easy reference
- 💾 **Local Storage**: Your meal plans are saved in the browser

## Tech Stack

- **React 19**: Latest React with modern features
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Day.js**: Lightweight date manipulation
- **React Icons**: Beautiful icon library

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint to check code quality

## Project Structure

```
meal-planner/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── Card.jsx      # Weekly day card component
│   │   ├── Header.jsx    # Application header
│   │   └── ShoppingList.jsx  # Shopping list feature
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Usage

1. **View the Week**: Navigate through the current week displayed at the top
2. **Add Meals**: Click "Add" under any meal category (Breakfast, Lunch, Dinner)
3. **Fill Details**: Enter your meal name and optional description
4. **Save**: Your meal is added to the day's plan
5. **Shopping List**: Click the shopping list button to view ingredients

## Upcoming Features

- 🔄 **Edit & Delete Meals**: Modify or remove existing meals from the plan
- 🔍 **Recipe Search**: Search and import recipes from online sources
- 📱 **Mobile Responsive**: Enhanced mobile experience
- 👥 **Family Sharing**: Share meal plans with family members as pdf
- 🎨 **Custom Themes**: Personalize the app appearance
- 📈 **Weekly Reports**: Track your meal planning consistency
- 🍳 **Quick Meal Templates**: Save common meal configurations
- 📚 **Meal History**: Access and view meal plans from previous weeks
