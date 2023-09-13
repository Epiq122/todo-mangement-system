package dev.robgleason.todo.service;

import dev.robgleason.todo.dto.RegisterDto;
import dev.robgleason.todo.entity.Role;
import dev.robgleason.todo.entity.User;
import dev.robgleason.todo.exception.TodoAPIException;
import dev.robgleason.todo.repository.RoleRepository;
import dev.robgleason.todo.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;


@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public String register(RegisterDto registerDto) {

        // check if username already exists
        if (userRepository.existsByUsername(registerDto.getUsername())) {
            throw new TodoAPIException(HttpStatus.BAD_REQUEST, "username already exists");
        }

        // check if email already exists
        if (userRepository.existsByEmail(registerDto.getEmail())) {
            throw new TodoAPIException(HttpStatus.BAD_REQUEST, "email already exists");
        }


        User user = new User();
        user.setName(registerDto.getName());
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName("ROLE_USER");
        roles.add(userRole);

        user.setRoles(roles);
        userRepository.save(user);
        return "User Registered Successfully";
    }
}
