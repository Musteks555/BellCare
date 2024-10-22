export const selectWishlist = (state) => state.wishlist.wishlist;

export const selectWishlistItemById = (id) => (state) => state.wishlist.wishlist.find((item) => item.id === id);
