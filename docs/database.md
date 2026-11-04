Aruhetta — Database Documentation

Document Version: 1.0
Database: PostgreSQL
Provider: Supabase
Status: Planned

1. Overview

Aruhetta uses PostgreSQL through Supabase as its primary database.

The database is designed to support user accounts, articles, community discussions, groups, events, bookmarks, notifications, tools, and administrative operations.

The database architecture prioritizes:

- Data integrity.
- Relational consistency.
- Security.
- Scalability.
- Maintainability.
- Efficient querying.

2. Database Naming Convention

General conventions:

- Use lowercase names.
- Use snake_case.
- Use plural names for collections.
- Use UUID for primary identifiers.
- Use "created_at" and "updated_at" for timestamps where appropriate.
- Use foreign keys for relational integrity.
- Use indexes for frequently queried fields.

3. Account Tables

profiles

Stores public user profile information.

Column| Type| Description
id| UUID| References auth.users
username| TEXT| Unique username
display_name| TEXT| Public display name
avatar_url| TEXT| Avatar location
bio| TEXT| Profile description
role| TEXT| User role
visibility| TEXT| Public/private
created_at| TIMESTAMPTZ| Creation date
updated_at| TIMESTAMPTZ| Last update

user_settings

Stores user preferences.

- user_id
- theme
- language
- text_size
- accent_color
- notification_preferences
- personalization_enabled
- privacy_settings
- updated_at

user_sessions

Stores application-level device/session metadata when required.

- id
- user_id
- device_name
- last_active_at
- created_at

Authentication tokens and passwords must remain managed by Supabase Auth, not duplicated in this table.

4. Social Tables

follows

- id
- follower_id
- following_id
- created_at

blocks

- id
- blocker_id
- blocked_id
- created_at

messages

- id
- sender_id
- receiver_id
- content
- attachment_id
- read_at
- created_at

Message access must be restricted to authorized conversation participants.

5. Article Tables

articles

- id
- author_id
- title
- slug
- excerpt
- content
- cover_image
- status
- published_at
- created_at
- updated_at

categories

- id
- name
- slug
- description

tags

- id
- name
- slug

article_tags

- article_id
- tag_id

Article statuses:

- draft
- submitted
- under_review
- scheduled
- published
- rejected
- archived

Articles must support author ownership, editorial review, and publication permissions.

6. Community Tables

posts

- id
- author_id
- group_id
- content
- visibility
- created_at
- updated_at

comments

- id
- author_id
- article_id
- post_id
- parent_comment_id
- content
- created_at
- updated_at

A comment must belong to an appropriate article or community post.

likes

- id
- user_id
- article_id
- post_id
- comment_id
- created_at

Duplicate likes for the same user and target must be prevented.

7. Group Tables

groups

- id
- owner_id
- name
- slug
- description
- visibility
- created_at
- updated_at

group_members

- id
- group_id
- user_id
- role
- joined_at

Group visibility:

- public
- private

Group roles:

- owner
- admin
- moderator
- member

8. Event Tables

events

- id
- organizer_id
- group_id
- title
- description
- start_at
- end_at
- location
- event_type
- status
- created_at

event_participants

- id
- event_id
- user_id
- attendance_status
- joined_at

Attendance statuses:

- attending
- interested
- declined

9. Bookmark Tables

bookmark_collections

- id
- user_id
- name
- description
- created_at

bookmarks

- id
- user_id
- collection_id
- content_type
- content_id
- created_at

Bookmarks must support guest-local storage and account synchronization after login.

10. Notification Tables

notifications

- id
- recipient_id
- actor_id
- notification_type
- title
- message
- target_type
- target_id
- is_read
- created_at

Notifications must be accessible only to their intended recipients.

11. Moderation Tables

reports

- id
- reporter_id
- target_type
- target_id
- reason
- description
- status
- reviewed_by
- reviewed_at
- created_at

moderation_logs

- id
- moderator_id
- action
- target_type
- target_id
- reason
- created_at

Moderation records should retain an appropriate history for accountability.

12. Tools Tables

tools

- id
- name
- slug
- description
- category
- status
- minimum_role
- created_at
- updated_at

tool_usage

- id
- user_id
- tool_id
- usage_status
- created_at

Usage records should avoid storing sensitive uploaded content unnecessarily.

13. Media Tables

media_files

- id
- owner_id
- storage_path
- original_name
- mime_type
- file_size
- media_type
- visibility
- created_at

Actual file contents are stored in Supabase Storage, not directly in PostgreSQL.

14. System Tables

audit_logs

Records important administrative and security-related actions.

- id
- actor_id
- action
- target_type
- target_id
- metadata
- created_at

Never store passwords, access tokens, or private credentials in audit logs.

app_settings

Stores platform configuration.

- id
- setting_key
- setting_value
- updated_at
- updated_by

Access must be restricted to authorized administrators.

15. User Roles

Planned roles:

Role| Description
Guest| Unauthenticated visitor
Member| Registered user
Contributor| Content creator
Moderator| Community and content moderator
Admin| Platform administrator
Owner| Full platform authority

Roles must be validated through trusted authorization policies. Users must not be able to grant themselves higher privileges.

16. Security and Row Level Security

RLS must be enabled on tables exposed through Supabase APIs.

Core policies:

- Users can update permitted fields in their own profiles.
- Users can manage their own bookmarks.
- Private messages are accessible only to their participants.
- Draft articles are accessible to their authors and authorized reviewers.
- Private group content is restricted to authorized members.
- Moderation records are restricted to authorized personnel.
- Administrative settings require appropriate permissions.

Authorization must be enforced by the backend, not only by frontend interface checks.

17. Data Integrity

Database constraints should include:

- Primary keys.
- Foreign keys.
- Unique usernames.
- Unique article slugs.
- Unique group slugs.
- Unique follow relationships.
- Unique group memberships.
- Unique user likes per target.
- Valid status values.
- Required fields and appropriate checks.

Deletion behavior must be explicitly defined for each relationship.

18. Indexing and Performance

Recommended indexes:

- Profile usernames.
- Article slugs and publication dates.
- Article author and status.
- Post creation dates.
- Comment parent relationships.
- Notification recipient and read status.
- Group membership relationships.
- Event start dates.

Indexes should be added based on actual query patterns and performance measurements.

19. Database Migrations

All structural changes must be tracked through Supabase migrations.

Planned location:

supabase/
└── migrations/
    ├── 0001_initial_schema.sql
    ├── 0002_accounts.sql
    ├── 0003_articles.sql
    ├── 0004_community.sql
    └── 0005_security_policies.sql

Migration requirements:

- Use versioned SQL files.
- Review changes before applying.
- Test migrations in development.
- Back up important data before production changes.
- Avoid undocumented manual schema changes.

20. Backup and Recovery

Database backup planning:

- Scheduled database backups.
- Appropriate retention periods.
- Backup verification.
- Recovery procedures.
- Periodic restoration testing.

Backup availability depends on the selected Supabase plan and configuration.

21. Future Expansion

Potential database additions:

- Reading history.
- Article revisions.
- Contributor submissions.
- Group invitations.
- Event reminders.
- Media collections.
- Analytics summaries.
- User reputation.
- Search indexing.

22. Database Status

This document defines the planned database structure.

No production database tables are created by this document. Actual SQL schemas, relationships, indexes, and RLS policies will be implemented and tested through migrations.
