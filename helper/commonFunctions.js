export function removeGarbageChar(fileName) {
    const arr = fileName.split('.');
    const ext = arr.pop();
    const name = arr.join('.');
    const filterData = name.replace(/[^a-zA-Z0-9-_]/g, '');
    return `${filterData}.${ext}`;
}

export async function playAudio() {
    const audio = new Audio('https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav');
    // let file = new File('../assets/sounds/ding.mp3')
    // var audio = new Audio(ding);
    audio.type = 'audio/wav';

    try {
        await audio.play();
        console.log('Playing...');
    } catch (err) {
        console.log(err);
    }
}

export function localStorageRetriever(key) {
    let val = null;
    try {
        val = localStorage.getItem(key);
    } catch (e) {
        // Handle different errors accordingly
        if (
            e instanceof DOMException &&
            (e.code === 22 ||
                e.code === 1014 ||
                e.name === 'QuotaExceededError' ||
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
        ) {
            // Quota exceeded: The user has filled their quota for local storage, so data can't be stored
            alert('Storage limit reached. Please clear some space and try again.');
        } else if (e instanceof ReferenceError || e.name === 'SecurityError') {
            // Local storage is not available or disabled
            alert('Local storage is not available. Please enable local storage in your browser settings.');
        } else {
            // General error handler
            console.error('An error occurred while saving data:', e);
            alert('An error occurred. Please try again later.');
        }
    } finally {
        return val;
    }
}
