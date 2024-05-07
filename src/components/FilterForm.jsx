import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from '@mui/material';
import { useContext, useState } from 'react';
import { getQuestions } from '../services/QuizApi';
import QuestionsContext from '../store/questions';
import { useNavigate } from 'react-router-dom';

export const FilterForm = ({ categories, tags }) => {
  const [category, setCategory] = useState('');
  const [tag, setTag] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [limit, setLimit] = useState(0);

  const questionsCtx = useContext(QuestionsContext);

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };

  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const handleClose = () => {
    setError(false);
  };

  const submitHandler = async () => {
    try {
      const questionsData = await getQuestions({
        limit,
        category,
        tag,
        difficulty,
      });
      questionsCtx.onChangeQuestionsData(questionsData.data);

      navigate('/quiz');
    } catch (error) {
      setError(true);
      console.log('agia erori', error.response.status);
      throw new error('questions load failed');
    }
  };

  return (
    <div>
      <div className=" grid grid-cols-3 mt-5">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            defaultValue=""
            id="category"
            label="Category"
            value={category}
            onChange={handleCategoryChange}
          >
            <MenuItem value="" disabled>
              <em>Select a category</em>
            </MenuItem>

            {categories.map((category) => (
              <MenuItem value={category.name} key={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="tag">Tag</InputLabel>
          <Select
            defaultValue=""
            id="tag"
            label="Tag"
            value={tag}
            onChange={handleTagChange}
          >
            <MenuItem value="" disabled>
              <em>Select a tag</em>
            </MenuItem>

            {tags.map((tag) => (
              <MenuItem value={tag.name} key={tag.id}>
                {tag.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="dificulty">Dificulty</InputLabel>
          <Select
            defaultValue=""
            id="dificulty"
            label="Dificulty"
            value={difficulty}
            onChange={handleDifficultyChange}
          >
            <MenuItem value="" disabled>
              <em>Select a difficulty level</em>
            </MenuItem>
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            helperText="Please enter question limit"
            label="Limit"
            type="number"
            value={limit}
            onChange={handleLimitChange}
          />
        </FormControl>
      </div>

      <div className="mt-3">
        <Button onClick={submitHandler}>Start</Button>
      </div>

      <Snackbar
        open={error}
        onClose={handleClose}
        message="questions were not found!"
        autoHideDuration={3000}
      />
    </div>
  );
};
