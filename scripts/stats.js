import { CountUp } from 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.min.js';

const servers = new CountUp('servers', 2133);
const users = new CountUp('users', 103000);
const tracks = new CountUp('tracks', 2400000);

servers.start();
users.start();
tracks.start();
