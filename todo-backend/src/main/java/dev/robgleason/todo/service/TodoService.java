package dev.robgleason.todo.service;

import dev.robgleason.todo.dto.TodoDto;

public interface TodoService {


    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodo(Long Id);
}
