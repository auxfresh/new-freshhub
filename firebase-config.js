
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWUjKRUpiLmwRi7UjQ5l_zCJ1YOGsaIg0",
  authDomain: "fresh-hub-d509f.firebaseapp.com",
  databaseURL: "https://fresh-hub-d509f-default-rtdb.firebaseio.com",
  projectId: "fresh-hub-d509f",
  storageBucket: "fresh-hub-d509f.firebasestorage.app",
  messagingSenderId: "101887757266",
  appId: "1:101887757266:web:80c054959f6588771fd60b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Firebase services
const database = firebase.database();
const storage = firebase.storage();

// Sample data structure for Firebase Realtime Database
const sampleData = {
    users: {
        "uid_ethan_123": {
            username: "Ethan",
            profileimage: "https://via.placeholder.com/40/4F46E5/FFFFFF?text=E",
            points: 1200,
            trend: "up"
        },
        "uid_olivia_456": {
            username: "Olivia", 
            profileimage: "https://via.placeholder.com/40/E74C3C/FFFFFF?text=O",
            points: 1150,
            trend: "neutral"
        },
        "uid_noah_789": {
            username: "Noah",
            profileimage: "https://via.placeholder.com/40/27AE60/FFFFFF?text=N",
            points: 1100,
            trend: "down"
        },
        "uid_sarah_321": {
            username: "Sarah",
            profileimage: "https://via.placeholder.com/40/9B59B6/FFFFFF?text=S",
            points: 980,
            trend: "up"
        },
        "uid_mike_654": {
            username: "Mike",
            profileimage: "https://via.placeholder.com/40/F39C12/FFFFFF?text=M",
            points: 850,
            trend: "down"
        }
    },
    fixtures: {
        upcoming: {
            match1: {
                match: "GOJO119 vs Deekay",
                date: "2025-01-15",
                matchDay: "1",
                timeResults: "7:00 PM"
            },
            match2: {
                match: "Barcelona vs Nova Fc",
                date: "2025-01-16",
                matchDay: "2", 
                timeResults: "8:30 PM"
            },
            match3: {
                match: "Fresh vs Man City",
                date: "2025-01-17",
                matchDay: "3",
                timeResults: "6:00 PM"
            },
            match4: {
                match: "Froah Fc vs Liverpool",
                date: "2025-01-18",
                matchDay: "4",
                timeResults: "9:00 PM"
            }
        }
    },
    communityPosts: {
        post1: {
            userId: "uid_ethan_123",
            username: "Ethan",
            userProfilePicture: "https://via.placeholder.com/40/F39C12/FFFFFF?text=E",
            content: "Can't wait for the GOJO119 vs Deekay game tonight! Who's your pick? 🔥 #GameDay",
            timestamp: Date.now() - (2 * 60 * 60 * 1000),
            likes: 25,
            shares: 12
        },
        post2: {
            userId: "uid_olivia_456",
            username: "Olivia",
            userProfilePicture: "https://via.placeholder.com/40/9B59B6/FFFFFF?text=O",
            content: "Just made my prediction for the Barcelona vs Nova Fc match! Feeling confident 💪 #LetsGo",
            timestamp: Date.now() - (4 * 60 * 60 * 1000),
            likes: 18,
            shares: 6
        }
    }
};

// Function to initialize sample data
async function initializeSampleData() {
    try {
        const snapshot = await database.ref().once('value');
        if (!snapshot.exists()) {
            await database.ref().set(sampleData);
            console.log('Sample data initialized');
        }
    } catch (error) {
        console.error('Error initializing sample data:', error);
    }
}

// Initialize sample data on first load
initializeSampleData();

// Export for use in other files
window.firebaseConfig = firebaseConfig;
window.database = database;
window.storage = storage;
