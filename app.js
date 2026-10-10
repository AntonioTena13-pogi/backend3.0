import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();

app.use(express.json());

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);

try {
    const port = 3000;
    app.listen(port, () => {
        console.log(`listening on port ${port}...`);
    });
} catch (e) {
    console.log(e);
}

