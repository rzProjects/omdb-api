# Omdb API

This is an app testing the Omdb API.

## Running the app

1. `cd` into the **omdb-api** folder.
2. Run `npm install`.
3. Run `npm start`.
4. Hit <kbd>CTRL</kbd> + <kbd>C</kbd> to quit.

## Usage

- Type in the search bar, then press enter or click the search icon to populate the movies list with new search results.

- Hover over a movie to show a **star** icon in the lower left of the element. Click that icon to add a movie to your **favorites**. The icon will remain filled. You should now see it in the list of movies when you click on the "Favorites" menu item. Click the icon again to remove the movie from your **favorites**.

- Click on a movie to go to the **movie details** page.

- You can see your **recent searches** on the **Searches** page. Click on a **search item** to be taken to the home page and search it again automatically.

## TODO
- [x] <s>Add a movie detail page</s>.
- [ ] Maybe save **favorites** and/or **recent searches** to **localStorage** to persist over time.