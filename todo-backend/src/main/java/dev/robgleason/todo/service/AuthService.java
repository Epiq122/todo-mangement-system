package dev.robgleason.todo.service;

import dev.robgleason.todo.dto.JwtAuthResponse;
import dev.robgleason.todo.dto.LoginDto;
import dev.robgleason.todo.dto.RegisterDto;

public interface AuthService {

    String register(RegisterDto registerDto);

    JwtAuthResponse login(LoginDto loginDto);
}
