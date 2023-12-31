package dev.robgleason.todo.service;

import dev.robgleason.todo.dto.TodoDto;

import java.util.List;

public interface TodoService {


    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodo(Long Id);

    List<TodoDto> getAllTodos();

    TodoDto updateTodo(TodoDto todo);

    void deleteTodo(Long todoId);

    TodoDto completeTodo(Long todoId);

    TodoDto inCompleteTodo(Long todoId);

}
