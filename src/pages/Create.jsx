import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { Form, redirect } from 'react-router-dom';

const Create = () => {
  return (
    <Box>
      {/*  react-router-dom 的 Form 元件來處理表單提交*/}
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          {/* 使用 Chakra UI 的 FormControl 元件來封裝表單控制元件，isRequired 表示此欄位是必填*/}
          <FormLabel>Name</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Task Description</FormLabel>
          <Textarea name="description" placeholder="請輸入任務描述"></Textarea>
        </FormControl>
        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" />
          <FormLabel mb="0" ml="10px" colorScheme="purple">
            Make this a priority task.
          </FormLabel>
        </FormControl>
        <Button type="submit">送出</Button>
      </Form>
    </Box>
  );
};

// 透過 createAction 來處理表單提交，模擬 API 呼叫
export const createAction = async ({ request }) => {
  const data = await request.formData();
  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === '',
  };

  console.log(task);
  return redirect('/');
};

export default Create;
