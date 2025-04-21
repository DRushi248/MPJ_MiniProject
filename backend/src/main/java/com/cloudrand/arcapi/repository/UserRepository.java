package com.cloudrand.arcapi.repository;

import com.cloudrand.arcapi.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email); // Add this method
    @Query("SELECT u.id FROM User u WHERE u.username = :username")
    long findUserIdByUsername(@Param("username") String username);
}
