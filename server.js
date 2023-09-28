import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';

// public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/dist')));

// Create a transporter object using your SMTP credentials
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider
    auth: {
      user: 'adith1996@gmail.com',
      pass: process.env.PASSWORD,
    },
  });

app.use(express.json());



app.post('/api/v1/send-email', (req, res) => {
    const { name, email, message } = req.body;
    
    // Define email content
    const mailOptions = {
      from: 'adith1996@gmail.com',
      to: 'adith1996@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  });  
  
  app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not really found' });
  });
  
  const port = process.env.PORT || 5000;

  const start = async () => {
  try {
      
      app.listen(port, () => {
        console.log(`server running on PORT ${port}...`);
      });
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  
  };
  
  
start();
  

