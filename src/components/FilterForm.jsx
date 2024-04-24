import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useState } from 'react';

export const FilterForm = ({ categories, tags }) => {
  const [category, setCategory] = useState(1);
  const [tag, setTag] = useState(1);
  const [difficulty, setDifficulty] = useState('easy');
  const [limit, setLimit] = useState(0);

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

  const submitHandler = () => {
    console.log(category);
    console.log(tag);
    console.log(difficulty);
    console.log(limit);
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
              <MenuItem value={category.id} key={category.id}>
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
              <MenuItem value={tag.id} key={tag.id}>
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
    </div>
  );
};
