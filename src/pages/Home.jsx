import { Button, Divider } from '@mui/material';
import { FilterForm } from '../components/FilterForm';
import { getAllCategories, getAllTags } from '../services/QuizApi';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchTags = async () => {
      try {
        const tagsData = await getAllTags();
        setTags(tagsData.data);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchCategories();
    fetchTags();
  }, []);

  return (
    <div className="w-full h-screen">
      <nav className="w-full bg-blue-600 py-3">
        <div className="w-full max-w-7xl mx-auto text-white">Quiz app</div>
      </nav>

      <div className="w-full max-w-7xl mx-auto mt-10 text-lg text-black">
        <p>
          Welcome to the Ultimate Quiz Experience! Test Your Knowledge and Have
          Fun with Our Engaging Quizzes. Challenge Yourself with a Variety of
          Topics and Difficulty Levels. Explore, Learn, and Enjoy!
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-10">
        <Button className="!capitalize">Try random quiz</Button>
        <Divider className="!mt-5">or</Divider>
        <FilterForm categories={categories} tags={tags} />
      </div>
    </div>
  );
};
