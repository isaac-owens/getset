import React from 'react';

export const data = {
    0: {
        name: "Create a Hunt",
        gifUrl: process.env.PUBLIC_URL + "/create.gif",
        instructions: 
        <ul className="instructions-list">
            <li>1. Create a title</li>
            <li>2. Upload your pictures</li>
            <li>3. Choose a category</li>
            <li>4. Click 'Set Game' button to create</li>
            <li>5. Go to 'MyHunts to find your new hunt!</li>
        </ul>
    },
    1: {
        name: "Find a Challenge",
        gifUrl: "url here...",
        instructions:
          <ul className="instructions-list">
            <li>1. Choose a category</li>
            <li>2. Select a challenge from the menu</li>
            <li>3. Click 'Add challenge' to accept challenge</li>
            <li>4. Click 'Remove challenge' to remove challenge</li>
            <li>5. Go to 'MyChallenges to see your accepted challenges!</li>
          </ul>
    },
    2: {
        name: "Complete a Challenge",
        gifUrl: "url here...",
        instructions:
          <ul className="instructions-list">
            <li>1. Select a challenge from the side menu</li>
            <li>2. Upload your matches to the challenge pictures</li>
            <li>3. Submit your challenge to get your score</li>
            <li>4. Receive your score and head to stats!</li>
          </ul>
    },
    3: {
        name: "Read your Stats",
        gifUrl: "url here...",
        instructions:
          <ul className="instructions-list">
            <li>1. Find your challenge in the 'Challenge' column</li>
            <li>2. You'll find your score in the middle column</li>
            <li>3. A winner is announced on the challenge's deadline date</li>
          </ul>
    }
}