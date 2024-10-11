import {useState} from 'react'
import {Typography, Flex, Button, Popover} from 'antd';
import ImageUploader from './ImageUploader';

export const EditorHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex justify={'space-between'} align={'center'} style={{padding: 16, marginInline: 48, marginTop: 24 }}>
      <Typography.Title level={2} editable>
        Заголовок
      </Typography.Title>
      <Popover open={open} content={<ImageUploader setOpen={setOpen}/>}>
        <Button onClick={() => setOpen(!open)} type={'primary'} style={{background: '#343f48'}}>Загрузить фон</Button>
      </Popover>
    </Flex>
  )
}
