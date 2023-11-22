import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import TodoItem from './TodoItem';
import styles from '../styles/modules/app.module.scss';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);

  // console.log('todo', todoList);

  const sortedTodoList = [...todoList];
  console.log('sorted', sortedTodoList);
  sortedTodoList?.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filterStatus = useSelector((state) => state.todo.initialFilterStatus);

  const filteredTodo = sortedTodoList.filter((todo) => {
    if (filterStatus === 'all') {
      return true;
    }

    return todo.status === filterStatus;
  });

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {filteredTodo && filteredTodo.length > 0 ? (
        filteredTodo.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <motion.p
          variants={child}
          initial="hidden"
          animate="visible"
          className={styles.emptyText}
        >
          No Todo Found
        </motion.p>
      )}
    </motion.div>
  );
}

export default AppContent;
