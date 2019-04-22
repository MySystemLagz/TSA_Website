var canStoreData = false;
var song = 0;

if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    canStoreData = true;
} else {
    console.log('The browser you are using does not support web storage.');
}

function addToCart(item) {
    if (canStoreData) {
        localStorage.setItem(song.toString(), item);
        song++;
    }
}

function clearStorage() {
    localStorage.clear();
    window.alert('Storage Cleared');
}