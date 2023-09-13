package dev.robgleason.todo.service;

import dev.robgleason.todo.dto.RegisterDto;

public interface AuthService {

    String register(RegisterDto registerDto);
}
